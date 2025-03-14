// +build release

package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"

        //"strings"
        //"fmt"
        //"os"
        //"errors"
        //"path/filepath"
    "github.com/gofiber/fiber/v2"
    //"github.com/gofiber/fiber/v2/middleware/proxy"
    "github.com/gofiber/fiber/v2/middleware/filesystem"

)



//go:generate sh -c "cd frontend; npm i; npm run build"
//go:embed all:frontend/build
var embedfs embed.FS

/*
var contentTypeMap = map[string]string{
    ".html": "text/html",
    ".css":  "text/css",
    ".js":   "application/javascript",
}

func SvelteKitHandler(path string) http.Handler {
        fsys, err := fs.Sub(files, "frontend/build")
        if err != nil {
                log.Fatal(err)
        }
        filesystem := http.FS(fsys)

        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
                //path := strings.TrimPrefix(r.URL.Path, path)
                path := r.URL.Path 
                _, err := filesystem.Open(path)
                if errors.Is(err, os.ErrNotExist) {
                        log.Print("--------------- not found:",path)
                        path = fmt.Sprintf("%s.html", path)
                  
                }
                log.Print(path)
                contentType := contentTypeMap[filepath.Ext(path)]
                log.Print(path, contentType)
                w.Header().Add("Content-Type", contentType)
                r.URL.Path = path
                http.FileServer(filesystem).ServeHTTP(w, r)
        })
}
*/

func init() {

   app =  fiber.New()
   log.Println("development mode  app New...")

   app.Get("/api/health", health)


   fsys, err  := fs.Sub(embedfs, "frontend/build")

   if err != nil {
       log.Fatal(err)
   }

   app.Use("/*", filesystem.New(filesystem.Config{
  	      Root: http.FS(fsys),
              Browse:       true,
              Index:        "index.html",
              NotFoundFile: "404.html",
              MaxAge:       3600,
    }))
}

