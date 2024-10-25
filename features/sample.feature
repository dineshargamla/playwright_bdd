Feature: Playwright site

    Background:
        Given I open url "https://www.saucedemo.com/v1/"

    Scenario: Check title
        When I fill U "Get started"
        Then I see in title "Playwright"

    Scenario: Check title
        When I click link "Get started"
        Then I see in title "Playwright"
