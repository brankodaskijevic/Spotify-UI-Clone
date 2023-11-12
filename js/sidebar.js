import { data } from "../assets/data/sidebar-data.js"

const sidebarLibraryList = document.querySelector(".sidebar.library-list.playlists")

data.forEach(item => {

  const playlistItem = document.createElement("div")
  playlistItem.className = "sidebar playlists playlist-item"

  const playlistItemCover = document.createElement("div")
  playlistItemCover.className = "playlist-cover"

  const playlistItemCoverImg = document.createElement("img")
  playlistItemCover.appendChild(playlistItemCoverImg)

  const playlistItemInfo = document.createElement("div")
  playlistItemInfo.className = "playlist-info"

  const playlistItemInfoTitle = document.createElement("div")
  playlistItemInfoTitle.className = "playlist-title"

  const playlistItemInfoTitleH3 = document.createElement("h3")
  playlistItemInfoTitle.appendChild(playlistItemInfoTitleH3)

  const playlistItemInfoArtist = document.createElement("div")
  playlistItemInfoArtist.className = "playlist-artist"

  const playlistItemInfoArtistP = document.createElement("p")
  playlistItemInfoArtist.appendChild(playlistItemInfoArtistP)

  playlistItemInfo.appendChild(playlistItemInfoTitle)
  playlistItemInfo.appendChild(playlistItemInfoArtist)

  playlistItem.appendChild(playlistItemCover)
  playlistItem.appendChild(playlistItemInfo)

  playlistItemCover.className += item.type == "album" ? " album" : " artist"
  playlistItemCoverImg.src = item.cover_src
  playlistItemCoverImg.alt = item.cover_alt

  playlistItemInfoTitleH3.innerText = item.playlist_title
  playlistItemInfoArtistP.innerHTML = item.playlist_artist

  sidebarLibraryList.appendChild(playlistItem)
})
