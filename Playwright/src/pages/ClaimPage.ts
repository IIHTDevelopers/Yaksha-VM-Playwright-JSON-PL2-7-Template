import { test, Locator, Page } from '@playwright/test';

export default class ClaimPage {

    readonly page: Page;
    private claimButton: Locator;
    private configurationtab: Locator;
    private eventTab: Locator;
    private addBtn: Locator;
    private eventInput: Locator;
    private saveBtn: Locator;
    private deleteToggle: Locator;
    private confirmDel: Locator;
    private checkbox: Locator;
    private expensesubTab: Locator;
    private editExpToggle: Locator;
    private checkboxExpense: Locator;
    private delSelectedbtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.delSelectedbtn = page.locator("");
        this.checkboxExpense = page.locator("");
        this.editExpToggle = page.locator("");
        this.expensesubTab = page.locator("");
        this.checkbox = page.locator("");
        this.confirmDel = page.locator("");
        this.deleteToggle = page.locator("");
        this.claimButton = page.locator("");
        this.configurationtab = page.locator("");
        this.eventTab = page.locator("");
        this.addBtn = page.locator("");
        this.eventInput = page.locator("");
        this.saveBtn = page.locator("");
    }

    /**
     * Navigates to the Claim configuration page and opens the Event tab.
     *
     * Steps performed:
     * - Clicks on the Claim menu.
     * - Opens the Configuration sub-tab.
     * - Selects the Event tab.
     * - Waits for the page to load.
     *
     * @returns {Promise<string>} The current page URL after navigating to the Event tab.
    */
    async clickClaimButton() {
    }

    /**
     * Adds a new event in Claim > Configuration > Event tab.
     * @param eventName - The name of the event to be created.
     * @returns A list of all event names after creation.
    */
    async addevents(eventName: string) {
    }

    /**
     * Creates an event, deletes it, and returns the updated event list.
     * @param editEventName - Name of the event to add and delete.
     * @returns The list of remaining event names.
    */
    async deleteEvents(editEventName: string) {
    }

    /**
     * Creates an event, marks it inactive, and returns its status text.
     * @param togEventName - Name of the event to create and inactivate.
     * @returns The status text of the event after inactivation.
    */
    async inactivateEvents(togEventName: string) {
    }

    /**
     * Adds a new expense type in Claim > Configuration > Expense Types
     * and returns the updated expense type list.
     * @param expenseName - The unique name for the new expense type.
     * @returns The updated list of expense types.
    */
    async addExpense(expenseName: string) {
    }

    /**
     * Edits an existing expense type in Claim > Configuration > Expense Types
     * and returns the updated expense type list.
     * @param updatedName - The updated name for the expense type.
     * @returns The updated list of expense types.
    */
    async editExpense(editexpenseName: string) {
    }

    /**
     * Deletes an existing expense type in Claim > Configuration > Expense Types
     * and returns the updated expense type list.
     * @param expenseName - The name of the expense type to delete.
     * @returns The updated list of expense types.
    */
    async deleteExpense(deleteExpenseName: string) {
    }

    /**
     * Deletes multiple expense types by selecting their checkboxes and confirming deletion.
     * @param expenseNames - Array of expense type names to delete.
     * @returns Updated expense type list after deletion.
    */
    async multipleExpenseDel(deleteExpenseName: string) {
    }
}
