<!-- AI-SDLC-TOOLKIT:BEGIN version="1.0.0" -->
# AI SDLC Toolkit

This repository is linked to the global AI SDLC Toolkit.

Toolkit root: /Users/darwinrodriguez/.copilot/ai-sdlc-toolkit

## What Copilot Reads Automatically

- Global instructions: .github/copilot-instructions.md
- Slash commands (/spec, /plan, /build, ...): .github/prompts/
- Scoped instructions: .github/instructions/
- Project profile: .ai-sdlc/project-profile.yaml
- Project context: .ai-sdlc/project-context.md

## Agent and Skill Files

Agent personas (.github/agents/) and skill playbooks (.github/skills/) are
available but must be attached manually as context:
  #file:.github/agents/tech-lead.md
  #file:.github/skills/backend-engineering/SKILL.md

Note: @agent-name mentions are NOT supported — Copilot @ participants are
VS Code extensions, not file-based definitions.

## Rules

1. Follow the relevant skill before acting (attach as #file context).
2. Use the relevant agent persona for perspective (attach as #file context).
3. Project overrides under .github/*-overrides/ beat global defaults.
4. Do not edit global toolkit files from a project task.
<!-- AI-SDLC-TOOLKIT:END -->
