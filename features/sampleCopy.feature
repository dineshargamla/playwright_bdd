Feature: Playwright site

    Background:
        Given I open url "https://playwright.dev"

    @test
    Scenario Outline: Check title
        When I click link "Get started"
        Then I see in title "playwright"

# Examples:
#     | title      |
#     | playwright |


