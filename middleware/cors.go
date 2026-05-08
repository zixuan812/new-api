package middleware

import (
	"github.com/QuantumNous/new-api/common"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func CORS() gin.HandlerFunc {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{
		"https://api.syncapi.dpdns.org",
	}
	config.AllowCredentials = true
	config.AllowMethods = []string{"GET", "POST" , "DELETE"}
	config.AllowHeaders = []string{
		"Content-Type", 
		"Authorization",
		"X-Request-Id",
		"Accept",
	}
	return cors.New(config)
}

func PoweredBy() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("X-New-Api-Version", common.Version)
		c.Next()
	}
}
