package main


import (
	"github.com/gofiber/fiber/v2"
        //"github.com/gofiber/fiber/v2/middleware/proxy"
        "encoding/json"
        "time"
        //"path/filepath"
	"log"
)


func health(c *fiber.Ctx) error {
        now := time.Now().Format("2006-01-02 15:04:05")
        res, _ := json.Marshal(map[string]string{
                "message": "hello from the server",
                "datetime": now,
        })
        //if err != nil {
        //        http.Error(w, err.Error(), http.StatusBadRequest)
        //        return
        //}
        c.Set(fiber.HeaderContentType, "application/json")

       	return c.SendString(string(res))

}

var app *fiber.App = nil

func main() {


	//app := fiber.New()
        if app == nil {
        	//app =  fiber.New()
                // https://docs.gofiber.io/api/fiber/
                app = fiber.New(fiber.Config{
                    Prefork:       true,
                    CaseSensitive: true,
                    StrictRouting: true,
                    ServerHeader:  "Fiber",
                    AppName: "Test App v1.0.1",
                })
                log.Println("main app New...")
        }

/*
	app.Get("/api/health", health)


	proxyConfig := proxy.Config{
		Servers: []string{
			"127.0.0.1:3000",
		},
	}

	app.Use(proxy.Balancer(proxyConfig))

*/

        /*
        var contentTypeMap = map[string]string{
            ".html": "text/html",
            ".css":  "text/css",
            ".js":   "application/javascript",
        }
        app.Get("/*", func(c *fiber.Ctx) error {
            log.Println("get:", c.Path())
            if err := proxy.Do(c, "http://localhost:3000"); err != nil {
                return err
            }
            // Remove Server header from response
            c.Response().Header.Del(fiber.HeaderServer)

            //if filepath.Base(c.Path()) == "entry.js" {
            //     c.Response().Header.Add("Content-Type", "application/javascript")
            //     return nil
            //}

            //contentType := contentTypeMap[filepath.Ext(c.Path())]
            //log.Println(contentType)
            //c.Response().Header.Add("Content-Type", contentType)

            return nil
        })
*/

	app.Listen(":8080")
}
