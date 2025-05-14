
import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const YOUTUBE_CHANNEL_ID = 'UCSZAqzuOERSSsz_YfTsENsw'

export async function GET() {
  const parser = new Parser()
  const feed = await parser.parseURL(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`)

  const videos = feed.items
    .filter(item => item.link?.includes('watch?v=') && !item.link.includes('/shorts/'))
    .slice(0, 3)
    .map(item => {
      const videoId = item.link?.split('v=')[1]
      return {
        item: item,
        title: item.title ?? '',
        link: item.link ?? '',
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      }
    })

  return NextResponse.json(videos)
}


