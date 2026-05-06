# Intent-Based Compliance Policy Project

This project is a prototype **intent-based compliance assistant** for Cisco IOS configurations. It takes a policy or intent PDF and a Cisco IOS configuration file, extracts candidate compliance rules, normalizes them into a structured form, runs deterministic checks against the config, and generates an HTML report showing which controls pass, fail, or still need review.

The current prototype is intentionally tuned for Cisco IOS and CIS-style benchmark content. It is designed to demonstrate a practical workflow for semi-automated compliance checking rather than claim universal support for every policy framework.

## Project Overview

The system uses two layers of evaluation:

1. **Deterministic checking**  
   Rules that can be evaluated reliably with code are checked first using structured logic.

2. **AI-assisted review**  
   Only unresolved or ambiguous items are sent to a second AI pass for suggested PASS / FAIL / UNSURE outcomes.

This means AI is used as an advisory layer, while deterministic logic remains the primary decision engine.

## What the Project Does

Given two inputs:

- A policy or intent PDF
- A Cisco IOS configuration text file

the system attempts to:

- Extract candidate compliance rules from the PDF using AI
- Normalize those extracted rules into a structured schema
- Run deterministic compliance checks on the Cisco IOS config
- Generate a report with PASS, FAIL, and NEEDS HUMAN REVIEW results
- Send review-only items to a second AI stage
- Produce a final HTML report with explainable outcomes

## Demo Screenshots
# Intent-Based Compliance Policy Project

This project is a prototype **intent-based compliance assistant** for Cisco IOS configurations. It takes a policy or intent PDF and a Cisco IOS configuration file, extracts candidate compliance rules, normalizes them into a structured form, runs deterministic checks against the config, and generates an HTML report showing which controls pass, fail, or still need review.

The current prototype is intentionally tuned for Cisco IOS and CIS-style benchmark content. It is designed to demonstrate a practical workflow for semi-automated compliance checking rather than claim universal support for every policy framework.

## Project Overview

The system uses two layers of evaluation:

1. **Deterministic checking**  
   Rules that can be evaluated reliably with code are checked first using structured logic.

2. **AI-assisted review**  
   Only unresolved or ambiguous items are sent to a second AI pass for suggested PASS / FAIL / UNSURE outcomes.

This means AI is used as an advisory layer, while deterministic logic remains the primary decision engine.

## What the Project Does

Given two inputs:

- A policy or intent PDF
- A Cisco IOS configuration text file

the system attempts to:

- Extract candidate compliance rules from the PDF using AI
- Normalize those extracted rules into a structured schema
- Run deterministic compliance checks on the Cisco IOS config
- Generate a report with PASS, FAIL, and NEEDS HUMAN REVIEW results
- Send review-only items to a second AI stage
- Produce a final HTML report with explainable outcomes

## Demo Screenshots
# Intent-Based Compliance Policy Project

This project is a prototype **intent-based compliance assistant** for Cisco IOS configurations. It takes a policy or intent PDF and a Cisco IOS configuration file, extracts candidate compliance rules, normalizes them into a structured form, runs deterministic checks against the config, and generates an HTML report showing which controls pass, fail, or still need review.

The current prototype is intentionally tuned for Cisco IOS and CIS-style benchmark content. It is designed to demonstrate a practical workflow for semi-automated compliance checking rather than claim universal support for every policy framework.

## Project Overview

The system uses two layers of evaluation:

1. **Deterministic checking**  
   Rules that can be evaluated reliably with code are checked first using structured logic.

2. **AI-assisted review**  
   Only unresolved or ambiguous items are sent to a second AI pass for suggested PASS / FAIL / UNSURE outcomes.

This means AI is used as an advisory layer, while deterministic logic remains the primary decision engine.

## What the Project Does

Given two inputs:

- A policy or intent PDF
- A Cisco IOS configuration text file

the system attempts to:

- Extract candidate compliance rules from the PDF using AI
- Normalize those extracted rules into a structured schema
- Run deterministic compliance checks on the Cisco IOS config
- Generate a report with PASS, FAIL, and NEEDS HUMAN REVIEW results
- Send review-only items to a second AI stage
- Produce a final HTML report with explainable outcomes

## Demo Screenshots

### Compliance Check Report

![Compliance Check Report](Intent%20based%20results.jpg)

### Rule Summary

![Rule Summary](Intent%20based%20outcomes.jpg)


### Compliance Check Report
