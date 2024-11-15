package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis_rate/v10"
	"github.com/google/wire"

	"abober/configs"
	v1 "abober/internal/routes/v1"
)

var ProviderSet = wire.NewSet(
	wire.Struct(new(Options), "*"),
	wire.Struct(new(v1.Options), "*"),
	NewEngine,
	NewHttpEngine,
	v1.NewUserRoute,
)

type Options struct {
	Router  *gin.Engine
	Conf    *configs.Config
	Limiter *redis_rate.Limiter

	User *v1.UserRoute
}
