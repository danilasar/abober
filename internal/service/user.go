package service

import (
	"context"
	"errors"
	"time"

	"abober/internal/data/ent"
	"abober/internal/dto/request"
	"abober/internal/dto/response"
	"abober/pkg/ecode"
	"abober/pkg/jwt"
)

type UserService struct {
	Options
}

func NewUserService(opt Options) *UserService {
	return &UserService{opt}
}

func (u *UserService) getJwtToken(user *ent.User) (*jwt.Token, error) {
	return u.Jwt.GenerateToken(jwt.ClaimsParam{UserID: user.ID}, time.Hour*24*90)
}

func (u *UserService) LoginWithEmail(ctx context.Context, req *request.EmailLoginReq) (*response.UserLoginInfo, error) {
	user, err := u.UserRepo.FindByEmail(ctx, req.Email)
	if err != nil {
		if errors.Is(err, ecode.NotFound) {
			return nil, ecode.EmailOrPasswordErr
		}
		return nil, err
	}

	if user.Password != req.Password {
		return nil, ecode.EmailOrPasswordErr
	}
	token, err := u.getJwtToken(user)
	if err != nil {
		return nil, err
	}
	return &response.UserLoginInfo{
		UserInfo: response.UserInfo{
			ID:    user.ID,
			Email: user.Email,
		},
		AccessToken: token,
	}, nil
}
