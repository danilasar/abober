package cmd

import (
	"github.com/google/wire"

	"abober/configs"
	"abober/internal/crontab"
	"abober/internal/routes"
)

var ProviderSet = wire.NewSet(
	wire.Struct(new(Options), "*"),
	NewJwt,
	NewApp,
)

type Options struct {
	Config *configs.Config
	Http   *routes.HttpEngine
	Cron   *crontab.Client
}
