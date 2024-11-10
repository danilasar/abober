//go:build wireinject
// +build wireinject

package main

import (
	"context"

	"github.com/google/wire"

	"abober/configs"
	"abober/internal/cmd"
	"abober/internal/crontab"
	"abober/internal/data"
	"abober/internal/routes"
	"abober/internal/service"
)

func app(ctx context.Context) (*cmd.App, func(), error) {
	panic(wire.Build(
		configs.InitConfig,
		routes.ProviderSet,
		data.ProviderSet,
		service.ProviderSet,
		crontab.ProviderSet,
		cmd.ProviderSet,
	))
}
