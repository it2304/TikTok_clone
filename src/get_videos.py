from googleapiclient.discovery import build
from dotenv import load_dotenv
import os
from pathlib import Path
import requests
import yt_dlp
import json

load_dotenv(Path("../.env.local"))
API_KEY = os.getenv("YOUTUBE_API_KEY")
youtube = build("youtube", "v3", developerKey=API_KEY)

def search_videos(query, max_results=10):
    request = youtube.search().list(
        q=query,
        type="video",
        part="id,snippet",
        maxResults=max_results,
        videoDuration="short"
    )
    response = request.execute()

    results = []
    for item in response["items"]:
        video_id = item["id"]["videoId"]
        video_data = {
            "video_id": video_id,
            "title": item["snippet"]["title"],
            "description": item["snippet"]["description"],
            "published_at": item["snippet"]["publishedAt"]
        }
        results.append(video_data)
    
    return results

def validate_videos(videos_to_test):
    count = 0
    shorts = []
    for video in videos_to_test:
        try:
            response = requests.head(f"https://www.youtube.com/shorts/{video['video_id']}")
            if response.status_code == 200:
                count += 1
                shorts.append(video)
        except requests.exceptions.RequestException as e:
            print(e)
    
    return count, shorts 

def get_video_details(video_id):
    request = youtube.videos().list(
        part="snippet,statistics",
        id=video_id
    )
    response = request.execute()
    
    if response["items"]:
        item = response["items"][0]
        stats = item["statistics"]
        return {
            "channelId": item["snippet"]["channelId"],
            "title": item["snippet"]["title"],
            "likes": stats.get("likeCount", 0),
            "views": stats.get("viewCount", 0),
            "comments": stats.get("commentCount", 0),
        }
    return {}

def get_channel_name(channel_id):
    request = youtube.channels().list(
        part="snippet",
        id=channel_id
    )
    response = request.execute()
    if response["items"] and len(response["items"]) > 0:
        return response["items"][0]["snippet"]["title"]
    return None

def download_video(video_id):
    video_url = f"https://www.youtube.com/shorts/{video_id}"
    output_path = f"videos/{video_id}." + "%(ext)s"

    ydl_opts = {
        "outtmpl": output_path,
        "format": "best",
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([video_url])

def store_metadata(video_id, details):
    metadata_file = f"videos/{video_id}.json"
    try:
        with open(metadata_file, "r") as f:
            data = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        data = []

    data.append(details)

    with open(metadata_file, "w") as f:
        json.dump(data, f, indent=4)

videos = search_videos("Cybertruck review", max_results=50)
count, shorts = validate_videos(videos)
details = {}

for items in shorts:
    curr_details = get_video_details(items["video_id"])
    curr_details["channelName"] = get_channel_name(curr_details["channelId"])

    details[items["video_id"]] = curr_details
    details["mux_asset_id"] = items["video_id"]

    download_video(items["video_id"])
    store_metadata(items["video_id"], curr_details)
    
print(details)




