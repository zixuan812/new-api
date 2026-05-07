package service

import (
	"math"

	"github.com/QuantumNous/new-api/dto"
)

const TokenBillingMultiplier = 1.2

func ApplyTokenBillingMultiplier(tokens int) int {
	if tokens <= 0 {
		return tokens
	}
	return int(math.Ceil(float64(tokens) * TokenBillingMultiplier))
}

func ApplyUsageTokenBillingMultiplier(usage *dto.Usage) {
	if usage == nil || usage.TokenBillingMultiplierApplied {
		return
	}

	usage.PromptTokens = ApplyTokenBillingMultiplier(usage.PromptTokens)
	usage.CompletionTokens = ApplyTokenBillingMultiplier(usage.CompletionTokens)
	usage.PromptCacheHitTokens = ApplyTokenBillingMultiplier(usage.PromptCacheHitTokens)
	usage.InputTokens = ApplyTokenBillingMultiplier(usage.InputTokens)
	usage.OutputTokens = ApplyTokenBillingMultiplier(usage.OutputTokens)

	usage.PromptTokensDetails = applyInputTokenDetailsBillingMultiplier(usage.PromptTokensDetails)
	usage.CompletionTokenDetails = applyOutputTokenDetailsBillingMultiplier(usage.CompletionTokenDetails)
	if usage.InputTokensDetails != nil {
		details := applyInputTokenDetailsBillingMultiplier(*usage.InputTokensDetails)
		usage.InputTokensDetails = &details
	}

	usage.ClaudeCacheCreation5mTokens = ApplyTokenBillingMultiplier(usage.ClaudeCacheCreation5mTokens)
	usage.ClaudeCacheCreation1hTokens = ApplyTokenBillingMultiplier(usage.ClaudeCacheCreation1hTokens)

	if usage.PromptTokens != 0 || usage.CompletionTokens != 0 {
		usage.TotalTokens = usage.PromptTokens + usage.CompletionTokens
	} else {
		usage.TotalTokens = ApplyTokenBillingMultiplier(usage.TotalTokens)
	}
	usage.TokenBillingMultiplierApplied = true
}

func ApplyRealtimeUsageTokenBillingMultiplier(usage *dto.RealtimeUsage) {
	if usage == nil || usage.TokenBillingMultiplierApplied {
		return
	}

	usage.InputTokens = ApplyTokenBillingMultiplier(usage.InputTokens)
	usage.OutputTokens = ApplyTokenBillingMultiplier(usage.OutputTokens)
	usage.InputTokenDetails = applyInputTokenDetailsBillingMultiplier(usage.InputTokenDetails)
	usage.OutputTokenDetails = applyOutputTokenDetailsBillingMultiplier(usage.OutputTokenDetails)

	if usage.InputTokens != 0 || usage.OutputTokens != 0 {
		usage.TotalTokens = usage.InputTokens + usage.OutputTokens
	} else {
		usage.TotalTokens = ApplyTokenBillingMultiplier(usage.TotalTokens)
	}
	usage.TokenBillingMultiplierApplied = true
}

func applyInputTokenDetailsBillingMultiplier(details dto.InputTokenDetails) dto.InputTokenDetails {
	details.CachedTokens = ApplyTokenBillingMultiplier(details.CachedTokens)
	details.CachedCreationTokens = ApplyTokenBillingMultiplier(details.CachedCreationTokens)
	details.TextTokens = ApplyTokenBillingMultiplier(details.TextTokens)
	details.AudioTokens = ApplyTokenBillingMultiplier(details.AudioTokens)
	details.ImageTokens = ApplyTokenBillingMultiplier(details.ImageTokens)
	return details
}

func applyOutputTokenDetailsBillingMultiplier(details dto.OutputTokenDetails) dto.OutputTokenDetails {
	details.TextTokens = ApplyTokenBillingMultiplier(details.TextTokens)
	details.AudioTokens = ApplyTokenBillingMultiplier(details.AudioTokens)
	details.ImageTokens = ApplyTokenBillingMultiplier(details.ImageTokens)
	details.ReasoningTokens = ApplyTokenBillingMultiplier(details.ReasoningTokens)
	return details
}
