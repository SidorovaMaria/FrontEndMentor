# Frontend Mentor - Personal finance app

## The FrontEndMentor challenge
Build out this personal finance app and get it looking as close to the design as possible.
The Data is provided in a local `data.json` file, so use that to populate the content on first load.

Your users should be able to:

-   See all of the personal finance app data at-a-glance on the overview page
-   View all transactions on the transactions page with pagination for every ten transactions
-   Search, sort, and filter transactions
-   Create, read, update, delete (CRUD) budgets and saving pots
-   View the latest three transactions for each budget category created
-   View progress towards each pot
-   Add money to and withdraw money from pots
-   View recurring bills and the status of each for the current month
-   Search and sort recurring bills
-   Receive validation messages if required form fields aren't completed
-   Navigate the whole app and perform all actions using only their keyboard
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page
-   **Bonus**: Save details to a database (build the project as a full-stack app)
-   **Bonus**: Create an account and log in (add user authentication to the full-stack app)


### Expected behaviour

-   Overview
    -   This page should display all the information at-a-glance and allow for easy navigation.
    -   We recommend building this page last, as it will require logic from the other pages (e.g., recurring bills) in order to display the data correctly.
-   Transactions
    -   Output the transactions from the `data.json` file, paginating results for every ten transactions.
    -   The search should allow for name search, but feel free to add other functionality like searching for transaction amounts if you want to test yourself.
    -   The sorting options include: Latest (most recent), Oldest, A to Z, Z to A, Highest (transaction amount), Lowest.
    -   The filter is by transaction category, which are: Entertainment, Bills, Groceries, Dining Out, Transportation, Personal Care, Education, Lifestyle, Shopping, General. Filtering by category should only show transactions from the selected category.
-   Budgets
    -   Don't worry if you can't create a donut pie chart exactly like in the design. Do your best to get close, but feel free to go in your own direction.
    -   The "Spent" amount should calculate the money spent within the category for the current month (August 2024 in the app).
    -   The "Latest Spending" component should display the three last transactions for that category regardless of the month.
    -   Clicking "See All" on a budget should navigate to the Transactions page with the filter set to the relevant category. For example, clicking "See All" on Entertainment should only show transactions with the Entertainment category.
    -   Adding a new budget should automatically pull in the three latest transactions from the created budget category and calculate the amount spent so far for August 2024.
    -   Deleting a budget should remove it from the Budgets page and the Overview.
-   Pots
    -   Adding money to a pot should deduct the given amount from the current balance (seen on the Overview page).
    -   Withdrawing money from a pot should add that amount to the current balance.
    -   Deleting a pot should return all the money from the pot to the current balance.
-   Recurring Bills
    -   List out all the recurring transactions and ensure only one item is shown per vendor.
    -   Show the recurring transactions that have already been paid for August 2024.
    -   Show the payments due to be paid soon based on their monthly payment date. Calculate this from recurring transactions yet to be paid for August 2024, but due within five days of the latest overall transaction in the app (Emma Richardson - 19 August 2024).
    -   The search should search based on name.
    -   The sorting options include: Latest (earliest in the month), Oldest, A to Z, Z to A, Highest (transaction amount), Lowest.
