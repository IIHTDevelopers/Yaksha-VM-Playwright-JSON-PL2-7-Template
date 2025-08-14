import { Locator, Page } from "@playwright/test";
import { test, expect } from '@playwright/test';
import path from "path";
const filePath = path.resolve(__dirname, "../../TestImage.jpg");

export class MyInfoPage {

  readonly page: Page;
  private gpa: Locator;
  private table: Locator;
  private languageComment: Locator;
  private editEducationBtn: Locator;
  private selectDropdown: Locator;
  private checkBox: Locator;
  private confirmDel: Locator;
  private editBtn: Locator;
  private saveQualiBtn: Locator;
  private Myinfo: Locator;
  private compInput: Locator;
  private qualificationBtn: Locator;
  private expAddbtn: Locator;
  private title: Locator;
  private delBtn: Locator;
  private delEducationBtn: Locator;
  private skillInput: Locator;
  private yearInput: Locator;
  private tableYear: Locator;
  private delSelected: Locator;

  constructor(page: Page) {

    this.page = page;
    this.delSelected = page.locator("");
    this.tableYear = this.page.locator("");
    this.table = this.page.locator("");
    this.languageComment = page.locator("");
    this.yearInput = page.locator("");
    this.skillInput = page.locator("");
    this.delEducationBtn = page.locator("");
    this.editEducationBtn = page.locator("");
    this.gpa = page.locator("");
    this.selectDropdown = page.locator("");
    this.checkBox = page.locator("");
    this.confirmDel = page.locator("");
    this.editBtn = page.locator("");
    this.delBtn = page.locator("");
    this.title = page.getByLabel('Job Title');
    this.saveQualiBtn = page.locator("");
    this.compInput = page.locator("");
    this.expAddbtn = page.locator("");
    this.Myinfo = page.locator("");
    this.qualificationBtn = page.locator("");
  }

  /**
   * Adds a qualification record for the user.
   *
   * Fills company and job title, saves the entry, and returns the updated list.
   *
   * @param compInput - Company name
   * @param jobTitle - Job title
   * @returns List of qualification entries
  */
  async addQualification(compInput: string, jobTitle: string) {
  }

  /**
   * Edits an existing qualification entry.
   *
   * Updates the company name and returns the updated list.
   *
   * @param editInput - Updated company name
   * @returns List of qualification entries
  */
  async editQualification(editInput: string) {
  }

  /**
   * Adds and deletes a qualification entry.
   *
   * Adds a qualification with the provided company name, deletes it, and returns the updated list.
   *
   * @param delUser - Company name to be added and then deleted
   * @param jobTitle - Job title associated with the qualification
   * @returns List of remaining qualification entries
  */
  async deleteQualification(delUser: string, jobTitle: string) {
  }

  /**
   * Deletes multiple selected qualification entries.
   *
   * Selects specific checkboxes, deletes the entries, and returns the toast confirmation message.
   *
   * @returns Success message text after deletion
  */
  async deleteMultiple() {
  }

  /**
   * Adds a new education entry with the given GPA to the user's qualifications.
   *
   * Selects an education level, inputs GPA, and saves the entry.
   *
   * @param GPA - The GPA value to be added.
   * @returns A list of all GPA entries after addition.
  */
  async addEducation(GPA: string) {
  }

  /**
   * Adds a skill with a given year, deletes it, and returns the updated skills list.
   * @param year - The unique year value to identify the skill.
   * @returns The updated list of skills after deletion.
  */
  async deleteskills(year: number) {
  }

  /**
   * Adds a skill with a given year, selects it using its checkbox,
   * deletes it via "Delete Selected" option, and returns the updated skills list.
   * @param year - The unique year value to identify the skill.
   * @returns The updated list of skills after deletion.
  */
  async selectDeleteSkills(year: number) {
  }
}
