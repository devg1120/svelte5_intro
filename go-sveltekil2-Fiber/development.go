// +build !release

package main

/*
import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
)
*/
import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/proxy"
    "log"
)


/*
func init() {
	u, err := url.Parse("http://localhost:3000/")
	if err != nil {
		log.Fatal(err)
	}
	http.Handle("/", httputil.NewSingleHostReverseProxy(u))
}
*/

func init() {

   app =  fiber.New()
   log.Println("development mode  app New...")

   app.Get("/api/health", health)
   proxyConfig := proxy.Config{
                Servers: []string{
                        "127.0.0.1:3000",
                },
   }

   app.Use(proxy.Balancer(proxyConfig))

}

