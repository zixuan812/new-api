package service

import (
	"testing"

	"github.com/QuantumNous/new-api/dto"
	"github.com/stretchr/testify/require"
)

func TestApplyTokenBillingMultiplierCeilsPositiveTokens(t *testing.T) {
	require.Equal(t, 0, ApplyTokenBillingMultiplier(0))
	require.Equal(t, 2, ApplyTokenBillingMultiplier(1))
	require.Equal(t, 120, ApplyTokenBillingMultiplier(100))
	require.Equal(t, 122, ApplyTokenBillingMultiplier(101))
}

func TestApplyUsageTokenBillingMultiplierIsIdempotent(t *testing.T) {
	usage := &dto.Usage{
		PromptTokens:     100,
		CompletionTokens: 50,
		PromptTokensDetails: dto.InputTokenDetails{
			CachedTokens:         10,
			CachedCreationTokens: 5,
			TextTokens:           85,
		},
		CompletionTokenDetails: dto.OutputTokenDetails{
			TextTokens:      40,
			ReasoningTokens: 10,
		},
	}

	ApplyUsageTokenBillingMultiplier(usage)
	ApplyUsageTokenBillingMultiplier(usage)

	require.True(t, usage.TokenBillingMultiplierApplied)
	require.Equal(t, 120, usage.PromptTokens)
	require.Equal(t, 60, usage.CompletionTokens)
	require.Equal(t, 180, usage.TotalTokens)
	require.Equal(t, 12, usage.PromptTokensDetails.CachedTokens)
	require.Equal(t, 6, usage.PromptTokensDetails.CachedCreationTokens)
	require.Equal(t, 102, usage.PromptTokensDetails.TextTokens)
	require.Equal(t, 48, usage.CompletionTokenDetails.TextTokens)
	require.Equal(t, 12, usage.CompletionTokenDetails.ReasoningTokens)
}

func TestApplyRealtimeUsageTokenBillingMultiplierIsIdempotent(t *testing.T) {
	usage := &dto.RealtimeUsage{
		InputTokens:  100,
		OutputTokens: 50,
		InputTokenDetails: dto.InputTokenDetails{
			TextTokens:  75,
			AudioTokens: 25,
		},
		OutputTokenDetails: dto.OutputTokenDetails{
			TextTokens:  30,
			AudioTokens: 20,
		},
	}

	ApplyRealtimeUsageTokenBillingMultiplier(usage)
	ApplyRealtimeUsageTokenBillingMultiplier(usage)

	require.True(t, usage.TokenBillingMultiplierApplied)
	require.Equal(t, 120, usage.InputTokens)
	require.Equal(t, 60, usage.OutputTokens)
	require.Equal(t, 180, usage.TotalTokens)
	require.Equal(t, 90, usage.InputTokenDetails.TextTokens)
	require.Equal(t, 30, usage.InputTokenDetails.AudioTokens)
	require.Equal(t, 36, usage.OutputTokenDetails.TextTokens)
	require.Equal(t, 24, usage.OutputTokenDetails.AudioTokens)
}
