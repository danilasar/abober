package service

import (
	"github.com/google/wire"

	"abober/internal/data"
	"abober/pkg/jwt"
)

var ProviderSet = wire.NewSet(
	wire.Struct(new(Options), "*"),
	NewUserService,
)

type Options struct {
	Jwt      *jwt.JWT
	UserRepo *data.UserRepo
}
