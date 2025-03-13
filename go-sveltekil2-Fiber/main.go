package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
        "encoding/json"
        "time"
)

func logger(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Print(r.RequestURI)
		h.ServeHTTP(w, r)
	})
}

func health(w http.ResponseWriter, r *http.Request) {
        now := time.Now().Format("2006-01-02 15:04:05")
        res, err := json.Marshal(map[string]string{
                "message": "hello from the server",
                "datetime": now,
        })
        if err != nil {
                http.Error(w, err.Error(), http.StatusBadRequest)
                return
        }
        w.Header().Set("Content-Type", "application/json")
        w.Write(res)

}

func main() {
	port := 8080
	flag.IntVar(&port, "p", 8080, "http listen port")
	flag.Parse()
	log.SetFlags(log.Lshortfile)
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()
	l, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatal(err)
	}
	defer l.Close()
	log.Println("listen:", l.Addr())
	http.HandleFunc("/api/health", health)
	server := &http.Server{Handler: logger(http.DefaultServeMux)}
	go func() {
		if err := server.Serve(l); err != nil {
			log.Fatal(err)
		}
	}()
	<-ctx.Done()
	server.Shutdown(ctx)
}

