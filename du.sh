#du -a /sclog/center | sort -n -r | head -n 100
#find . -type f -printf '%s %p\n' | sort -nr | head -500
#find . -type f -printf '%s %p\n' | grep -E -v "^/path/to/dir/(backup|error)/"
find . -type f -printf '%s %p\n' | grep -E -v "node_modules|kit_build|svelte-kit|target|.git" | sort -nr | head -50

