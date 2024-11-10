package v1

import (
	"github.com/bsm/redislock"
	"github.com/go-redis/redis_rate/v10"

	"abober/internal/service"
)

type Options struct {
	Limiter *redis_rate.Limiter
	Locker  *redislock.Client

	UserService *service.UserService
}
