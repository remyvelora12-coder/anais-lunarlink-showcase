#!/usr/bin/env bash
# Moves media/documents from the repo root into assets/images, assets/videos or docs.
set -euo pipefail
cd "$(dirname "$0")/.."

shopt -s nullglob nocaseglob

move() {
  local dest=$1; shift
  for f in "$@"; do
    mkdir -p "$dest"
    mv -n "$f" "$dest/"
    echo "Moved $f -> $dest/"
  done
}

move assets/images *.png *.jpg *.jpeg *.gif *.webp *.svg *.avif
move assets/videos *.mp4 *.webm *.mov *.m4v
move docs *.pptx *.docx *.pdf *.xlsx
