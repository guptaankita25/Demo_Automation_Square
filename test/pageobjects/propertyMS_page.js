import assertUtils from "../../utils/assertUtils";
import randomUtils from "../../utils/randomUtils";
import userActions from "../../utils/userActions";
import innagoLoginPage from "./innago_login.page.js";
import menu_page from "./menu_page.js";
import testData from "../../mocks/testData";
import { browser } from "@wdio/globals";
import userData from "../../mocks/userData";
import calender from "../../utils/calender.js";
//import { th } from "@faker-js/faker";
//import { use } from "react";
//import { number } from "yargs";

class properties_page {
    locators = {
        addPropertyDetails: {
            addProperty_Button: "#add-property",
            addressCollapse_Icon: '//in-icon[@name="menu-hamburger-reversed"]',
            closeAddressCollapse_Icon: '//in-icon[@name="close-model"]',
            addressLine1_Heading: '//h5[normalize-space()="Address Line 1"]',
            addressLine1_Input: '//input[@formcontrolname="addressLine1"]',
            addressLine2_Input: '//input[@formcontrolname="addressLine2"]',
            city_Input: '//input [@formcontrolname="city"]',
            zipCode_Input: '//input [@formcontrolname="zip"]',
            state_Dropdown: '//select [@formcontrolname="state"]',
            property_Name_Input: '//input [@formcontrolname="propertyName"]',
            property_Type_Dropdown: '//select[@formcontrolname="propertyType"]',
            tags_Dropdown: '//ng-select[@formcontrolname="propertyTagIds"]',
            next_Button: '//button[@data-locator="save-info-to-move-next"]',
            cancel_Button: '//button[@data-locator="cancel-section"]',
            unit_Name_input: '//input[@formcontrolname="unitName"]',
            unit_details_Collapse_Icon: '//in-icon[@class="in-icon tw-ml-auto !tw-text-dark-grey ng-tns-c583-7 ng-star-inserted"]',
            next_Button_UnitDetails: '//button [@data-id="save-info-to-move-next"]',
            cancel_Button_UnitDetails: '//button [@data-id="cancel-section"]',
            back_Button_UnitDetails: '//button [@data-id="move-to-previous-section"]',

            save_Button_Property_Setting: '//button[@data-locator="save-info-to-move-next"]',
            bank_Account_selection: '//input[@name="deposit"]',
            add_Lease_Button_Verify: '//button [@data-locator="navigateToCreateProperty"]',
        },

        lease_TermDetails: {
            nextButton_AddLeaseTermDetails: "#start-adding-lease",
            m2m_Lease_Type_RadioButton: '//label[@for="lease-radio-month"]',
            next_Button_LeaseTermDetails: "#lease-next",
            rent_Amount_Input: '//input[@name="amount"]',
            due_On_Date_Dropdown: '//select [@name="dueOnMonthly"]',
            first_Invoice_Date_Input: '//select[@name="firstRentalInvoiceDate"]',
            payment_Frequency_Dropddown: '//select[@name="paymentfrequency"]',
            payment_Schedule_Dropdown_BiMonthly: {
                payment_Schedule_Dropdown_BiMonthly_First: '//select[@name="dueDateBiMonthlyStart"]',
                payment_Schedule_Dropdown_BiMonthly_Second: '//select[@name="dueDateBiMonthlyEnd"]',
                first_Invoice_Due_Date_BiMonthly: '//select[@name="firstRentalInvoiceDate"]',
            },
            payment_Schedule_Dropdown_Weekly: {
                payment_Schedule_Dropdown_Weekly_New: '//select[@name="dueweek"]',
                first_Rental_Invoice_Weekly: '//select[@name="selectedMonthForWeekly"]',
                select_first_Rental_Invoice_Weekly: '//input[@name="usage"]',
            },
            view_And_Edit_Rent_Scheduled: {
                total_Number_Of_Invoices_Heading: 'p[name="totals-invoices-paragraph"]',
                total_Number_Of_Invoice_Count: '//p[@name="totals-invoices-count-paragraph"]',
                view_Edit_Rent_Scheduled: '//button[@data-locator="qa-view-edit-rent-schedule"]',
                action_Button_Three_Dot: '//div[@class="lease-summary-inner ng-star-inserted"]//div[2]/div/div[4]',
                action_Button_Three_Dot_Second_Row: '//a[normalize-space()="Edit"]//img[@alt="Edit"]',
                edit_Button: '//a[normalize-space()="Edit"]',
                delete_Button: '//a[normalize-space()="Delete"]',
                //calender_Input: "//app-group-invoice//div[2]/div[2]/div/div[2]/div//mat-datepicker-toggle",  /// ankita
                calender_Input: '//datepicker[@data-locator="invoiceDueDate"]//button[@aria-label="Open calendar"]',
                calender_Input_Second_Row: "",
                rent_Input: '//input[@data-locator="invoiceRentEditable"]',
                rent_Input_Second_Row: '(//input[@placeholder="0"])[1]',
                save_Button: '(//button[@title="Save"])[1]',
                save_Button_Second_Row: '(//img[@alt="Save"])[2]',
                row_List_Rent_Invoice: "//app-group-invoice/div[2]/div/div",
            },
        },

        add_Additional_Fees_Section: {
            add_additional_Fees: '//button[contains(text(), " Add Additional Fee (Optional)")]',
            cross_icon: '(//img[@alt="Close"])[2]',
            item_Dropdown: '//div[@class="innago-multiselect-field"]',
            select_Item_Checkbox: '//label[normalize-space()="Maintenance Request"]',
            select_Item_Checkbox_LateFess: '//label[normalize-space()="Late Fee Charge"]',
            add_New_Item: '//button[contains(text(), "Add Item")]',
            description_Input: '//input[@placeholder="Description"]',
            rate_Input: '//input[@id="rate0"][1]',
            quantity_Input: '//input[@id="qty0"][1]',
            notes_addon: "#notes",
            recurring_Invoice_Toggle_Switch: '//div[@class="simple-switch"]',
            recurring_Invoice_Switch_ON: {
                payement_Frequency_Dropdown: '//select[@id="paymentfrequency"]',
                due_On_Monthly: '//select[@id="dueOnDayMonthly"]',
                start_Date_Monthly: '//select[@id="startDateOnInvoice"]',
                End_Date_Monthly: '//select[@id="endDateOnInvoice"]',
            },
            cancel_Button: '//button[text() ="Cancel"]',
            create_Button: '//button[text() = " Create "]',
            make_This_A_Line_Item_On_The_Rental_Invoice: {
                line_Item_Rental_Invoice: 'label[for="rental-invoice-attach"]',
                start_Date: "#startDateOnInvoice",
                end_Date: "#endDateOnInvoice",
            },
            new_Item_Added_Additional_Fees: {
                item_Dropdown_new: '//tbody/tr[2]/td[1]/div[1]/div[1]/div[1][@class="innago-multiselect-field"]',
                add_Item_Type_New: '(//input[@placeholder="Add Item Type"])[2]',
                plus_Icon_Add_New_Item: "//table/tbody//tr[2]/td/div/div//div//div//div[2]/button",
                description_Input_New: '//table/tbody//tr[2]//td[2]/div/div/input[@placeholder="Description"]',
                quantity_New_Input: '//table/tbody//tr[2]//td[3]/div/div/input[@id="qty1"]',
                rate_New_Input: '//table/tbody//tr[2]//td[4]/div/div/input[@id="rate1"]',
            },
            recurring_Invoice_Heading: '//h4[@name="recurring-item-heading"]',
        },

        fixed_TermDetails: {
            fixed_Term_Type_RadioButton: '//label[@for = "lease-radio-fixed"]',
            calendar_Click_Input: '//label[@name="end-date-label"]/following::mat-datepicker-toggle[1]/button',
            payment_Schedule_Dropdown: {
                payment_Schedule_Option_Monthly: '/select[@name= "paymentfrequency"]/option[normalize-space()="Monthly"]',
                payment_Schedule_Option_Bi_Monthly: '//select[@name="paymentfrequency"]/option[normalize-space()="Bi-Monthly"]',
                payment_Schedule_Option_Semi_Annually: '//select[@name="paymentfrequency"]/option[normalize-space()="Semi-annually"]',
                payment_Schedule_Option_Weekly: '//select[@name="paymentfrequency"]/option[normalize-space()="Weekly"]',
                payment_Schedule_Option_Bi_Weekly: '//select[@name="paymentfrequency"]/option[normalize-space()="Bi-Weekly"]',
                payment_Schedule_Option_Custom: '//select[@name="paymentfrequency"]/option[normalize-space()="Custom"]',
            },
            due_On_Dropdown_Monthly_FixedTerm: '//select[@name="dueOnMonthly"]',
            first_Invoice_Date_Input_FixedTerm: '//select[@name="firstRentalInvoiceDate"]',
        },

        deposit_Details: {
            deposit_Amount_Input: '//input[@name="deposit"]',
            due_On_Calendar_Input: '//label[@name="due-on-label"]/following::mat-datepicker-toggle[1]/button',
        },

        add_TenantDetails: {
            add_Tenant_Button: "#next-add-tenant",
            fname_Input: '//input[@placeholder="First Name"]',
            lname_Input: '//input[@placeholder="Last Name"]',
            email_Input: '//input[@placeholder="Email"]',
            phone_Input: "#phone-number-filed",
            next_Button_TenantDetails: "#sign-lease-next",
            application_Screening_Dropdwon: "#select-pack",
            each_Tenant_Is_Only_Responsible_Checkbox: '//label[@name="check-box-label"]',
            add_New_Tenant_Button: "#add-new-tenant",
            all_Tenant_Are_Equally_Responsbile: '//label[@for="all"]',
            click_second_Tenant_details_Fname: '//table[contains(@class, "table-look")]//tbody/tr[2]//input[@placeholder="First Name"]',
            click_second_Tenant_details_Lastname: '//table[contains(@class, "table-look")]//tbody/tr[2]//input[@placeholder="Last Name"]',
            click_second_Tenant_details_Email: '//table[contains(@class, "table-look")]//tbody/tr[2]//input[@placeholder="Email"]',
            click_second_Tenant_details_Phone: '//table[contains(@class, "table-look")]//tbody/tr[2]//input[@placeholder="Phone Number"]',
            application_Screening_Dropdwon2: '//table[contains(@class, "table-look")]//tbody/tr[2]//div[@id="select-pack"]',
        },

        renterInsurance_Details: {
            next_Button_RenterInsuranceDetails: '//button[@data-locator="qa-renter-insurance-9"]',
        },

        finalize_Lease: {
            offline_Signature_Checkbox: "#upload-signed-lease",
            confirm_Invite_Button: "#done-btn",
        },

        propertyFilter: {
            filter_Dropdown: '//div[@id="filter-dropdown"]/in-icon[2]',
            property_Dropdown_Option: '//ng-select[@formcontrolname= "propertyIds"]',
            property_Search_Field: 'input[placeholder="search"]',
            firstPropertyCheckBox: "(//div[contains(@class,'ng-dropdown-panel')]//div[contains(@class,'ng-option')])[1]",
            apply_Filter: "#apply-filter",
            clear_Filter: "#clear-filter",
            city_Label: "#city-label",
            city_Dropdown: "#city-list",
            city_Search_Input: "//div[1]/ng-select/div/div/div[2]/input",

            getCityAsPerName: function (cityName) {
                return `//span[text() ="${cityName}"]`;
            },
            state_Dropdown: "#state-list",
            getStateAsPerName: function (stateName) {
                return `//span[text() ="${stateName}"]`;
            },
            zipCode_Input: "#zip-code",
            status_Dropdown: "#status-list",
            getStatusAsPerName: function (statusName) {
                return `//span[text() ="${statusName}"]`;
            },
            getPropertyByName: function (propertyName) {
                return `//div[contains(text(),"${propertyName}")]`;
            },
            numberOfUnits_Input: "#no-of-unit",
            hasOpen_Maintenance_Checkbox: "#has-open-maintenance",
            viewArchived_Properties_Checkbox: "#view-archived-property",
        },
    };

    //Creating Dynamic function

    async applyFilterOnProperties(properties) {
        console.log("Applying filter on properties");

        await userActions.clickOn(this.locators.propertyFilter.filter_Dropdown);
        if (properties !== undefined && properties !== null) {
            console.log("Filtering on properties: " + properties);
            await userActions.clickOn(this.locators.propertyFilter.property_Dropdown_Option);
            for (let i = 0; i < properties.length; i++) {
                await userActions.clearValue(this.locators.propertyFilter.property_Search_Field);
                await userActions.enterText(this.locators.propertyFilter.property_Search_Field, properties[i]);
                await userActions.waitFor(2000);
                await assertUtils.verifyElementToHaveText(this.locators.propertyFilter.firstPropertyCheckBox, properties[i]); //check for locators
                await userActions.clickOn(this.locators.propertyFilter.firstPropertyCheckBox);
                await userActions.clickOn(this.locators.propertyFilter.property_Dropdown_Option); //closing the dropdown

                await userActions.waitFor(2000);
                await userActions.clickOn(this.locators.propertyFilter.apply_Filter);
                await userActions.waitFor(2000);
            }
        }

        // if (city != undefined && city !== null) {
        //     //console.log("Filtering on city: " + city);

        //     await userActions.clickOn(this.locators.propertyFilter.city_Dropdown);
        //     await userActions.enterText(this.locators.propertyFilter.city_Search_Input, city);
        //     await userActions.waitFor(5000);

        //     await userActions.clickOn(this.locators.propertyFilter.getCityAsPerName(city));
        // }

        // await userActions.waitFor(2000);
        // await userActions.clickOn(this.locators.propertyFilter.apply_Filter);
        // await userActions.waitFor(2000);
    }

    async selectGivenPropertyFromList(propertyName) {
        console.log("Selecting property: " + propertyName);
        await userActions.clickOn(this.locators.propertyFilter.getPropertyByName(propertyName));
    }

    async createNewProperty() {
        let addressinformation = {
            propertyName: await randomUtils.randomAlphabets(9),
            houseNumber: "House Number" + (await randomUtils.generateRandomNumber(6)),
            streetName: (await randomUtils.randomAlphabets(9)) + "street",
            zipCode: await randomUtils.generateRandomNumber(5),
            city: await randomUtils.getRandomValueFromArray(testData.po.newProperty.city_List),
            state: await randomUtils.getRandomValueFromArray(testData.po.newProperty.state_List),
            propertyType: await randomUtils.getRandomValueFromArray(testData.po.newProperty.property_Type),
            unit: "Unit" + (await randomUtils.generateRandomNumber(5)),
        };

        await userActions.clickOn(this.locators.addPropertyDetails.addProperty_Button);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.addPropertyDetails.addressCollapse_Icon);
        await userActions.enterText(
            this.locators.addPropertyDetails.addressLine1_Input,
            addressinformation.houseNumber + "" + addressinformation.streetName
        );
        await userActions.enterText(this.locators.addPropertyDetails.city_Input, addressinformation.city);
        await userActions.enterText(this.locators.addPropertyDetails.zipCode_Input, addressinformation.zipCode.toString());
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.addPropertyDetails.state_Dropdown, 1);
        await userActions.waitFor(2000);
        await userActions.clickOn(this.locators.addPropertyDetails.closeAddressCollapse_Icon);
        await userActions.enterText(this.locators.addPropertyDetails.property_Name_Input, addressinformation.propertyName);
        await userActions.waitFor(2000);
        await userActions.clickOn(this.locators.addPropertyDetails.property_Type_Dropdown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.addPropertyDetails.property_Type_Dropdown, 2);
        await userActions.clickOn(this.locators.addPropertyDetails.next_Button);
        await userActions.enterText(this.locators.addPropertyDetails.unit_Name_input, addressinformation.unit);
        await userActions.clickOn(this.locators.addPropertyDetails.next_Button_UnitDetails);
        await userActions.clickOn(this.locators.addPropertyDetails.bank_Account_selection);
        await userActions.clickOn(this.locators.addPropertyDetails.save_Button_Property_Setting);
        return addressinformation;
    }

    //M to M lease cases
    async addingM2MLeaseTermDetails_Monthly() {
        let addressinformation1 = {
            fname: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            email: "test" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
        };
        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.m2m_Lease_Type_RadioButton);
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "2500");
        await userActions.clickOn(this.locators.lease_TermDetails.due_On_Date_Dropdown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.due_On_Date_Dropdown, 1);
        await userActions.clickOn(this.locators.lease_TermDetails.first_Invoice_Date_Input);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.first_Invoice_Date_Input, 1);
        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation1.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation1.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation1.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation1.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);
        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }

    async addingM2MLeaseTermDetails_Bi_Monthly_With_Additional_fess() {
        let addressinformation2 = {
            fname: await randomUtils.randomAlphabets(5),
            fname1: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            lastname1: await randomUtils.randomAlphabets(7),
            email: "random" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            email1: "random" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
            phone1: "99999" + (await randomUtils.generateRandomNumber(5)),
            description: "Maintenance" + (await randomUtils.randomAlphabets(2)),
            notes: "Request Raised By Mike" + "test" + (await randomUtils.randomAlphabets(2)),
        };
        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.m2m_Lease_Type_RadioButton);
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Frequency_Dropddown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.payment_Frequency_Dropddown, 2);
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "1500");
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.payment_Schedule_Dropdown_BiMonthly_First);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.payment_Schedule_Dropdown_BiMonthly_First,
            1
        );
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.payment_Schedule_Dropdown_BiMonthly_Second);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.payment_Schedule_Dropdown_BiMonthly_Second,
            2
        );
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.first_Invoice_Due_Date_BiMonthly);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.lease_TermDetails.payment_Schedule_Dropdown_BiMonthly.first_Invoice_Due_Date_BiMonthly,
            1
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.add_additional_Fees);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.select_Item_Checkbox);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.description_Input, addressinformation2.description);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.quantity_Input, 5);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.rate_Input, 20);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.notes_addon);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.notes_addon, addressinformation2.notes);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.create_Button);
        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation2.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation2.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation2.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation2.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.add_New_Tenant_Button);
        await userActions.clickOn(this.locators.add_TenantDetails.click_second_Tenant_details_Fname);

        await userActions.enterText(this.locators.add_TenantDetails.click_second_Tenant_details_Fname, addressinformation2.fname1);
        await userActions.enterText(this.locators.add_TenantDetails.click_second_Tenant_details_Lastname, addressinformation2.lastname1);
        await userActions.enterText(this.locators.add_TenantDetails.click_second_Tenant_details_Email, addressinformation2.email1);
        await userActions.enterText(this.locators.add_TenantDetails.click_second_Tenant_details_Phone, addressinformation2.phone1);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon2);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon2, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.each_Tenant_Is_Only_Responsible_Checkbox);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);

        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }

    async addingM2MLeaseTermDetails_Weekly_With_Additional_fess_Recurring_Fess() {
        let addressinformation3 = {
            description1: "New" + (await randomUtils.randomAlphabets(3)),
            description2: "New" + (await randomUtils.randomAlphabets(3)),

            fname: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            email: "random" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
        };

        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.m2m_Lease_Type_RadioButton);
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Frequency_Dropddown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.payment_Frequency_Dropddown, 3);
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "500");
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.payment_Schedule_Dropdown_Weekly_New);

        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.payment_Schedule_Dropdown_Weekly_New,
            2
        );
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.select_first_Rental_Invoice_Weekly);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.add_additional_Fees);

        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.select_Item_Checkbox);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.description_Input, addressinformation3.description1);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.quantity_Input, 7);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.rate_Input, 30);

        await userActions.clickOn(this.locators.add_Additional_Fees_Section.add_New_Item);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.item_Dropdown_new);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.add_Item_Type_New);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.add_Item_Type_New, "New");
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.plus_Icon_Add_New_Item);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.item_Dropdown_new);
        await userActions.enterText(
            this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.description_Input_New,
            addressinformation3.description2
        );
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.quantity_New_Input, 6);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.rate_New_Input, 30);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Toggle_Switch);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.payement_Frequency_Dropdown);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.payement_Frequency_Dropdown,
            1
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.due_On_Monthly);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.due_On_Monthly,
            1
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.start_Date_Monthly);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.start_Date_Monthly,
            1
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.End_Date_Monthly);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.recurring_Invoice_Switch_ON.End_Date_Monthly,
            2
        );

        //await userActions.clickOn(this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.line_Item_Rental_Invoice);   /// check the locatos for lne item
        //await userActions.waitFor(2000);
        // await userActions.clickOn(this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.start_Date);
        // await userActions.selectOptionFromDropDownBasedOnIndex(
        //     this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.start_Date,
        //     1
        // );
        // await userActions.clickOn(this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.end_Date);
        // await userActions.selectOptionFromDropDownBasedOnIndex(
        //     this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.end_Date,
        //     2
        // );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.create_Button);

        await assertUtils.verifyElementExistsonPage(this.locators.add_Additional_Fees_Section.recurring_Invoice_Heading);
        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation3.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation3.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation3.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation3.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.each_Tenant_Is_Only_Responsible_Checkbox);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);
        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }

    async addingM2MLeaseTermDetails_Weekly_With_Additional_fess_Recurring_Fess_Make_This_line_Item_As_Rental_Invoice() {
        let addressinformation3 = {
            description1: "New" + (await randomUtils.randomAlphabets(3)),
            description2: "New" + (await randomUtils.randomAlphabets(3)),

            fname: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            email: "random" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
        };

        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.m2m_Lease_Type_RadioButton);
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Frequency_Dropddown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.payment_Frequency_Dropddown, 3);
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "500");
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.payment_Schedule_Dropdown_Weekly_New);

        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.payment_Schedule_Dropdown_Weekly_New,
            2
        );
        await userActions.clickOn(this.locators.lease_TermDetails.payment_Schedule_Dropdown_Weekly.select_first_Rental_Invoice_Weekly);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.add_additional_Fees);

        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.select_Item_Checkbox);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.item_Dropdown);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.description_Input, addressinformation3.description1);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.quantity_Input, 7);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.rate_Input, 30);

        await userActions.clickOn(this.locators.add_Additional_Fees_Section.add_New_Item);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.item_Dropdown_new);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.add_Item_Type_New);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.add_Item_Type_New, "New");
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.plus_Icon_Add_New_Item);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.item_Dropdown_new);
        await userActions.enterText(
            this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.description_Input_New,
            addressinformation3.description2
        );
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.quantity_New_Input, 8);
        await userActions.enterText(this.locators.add_Additional_Fees_Section.new_Item_Added_Additional_Fees.rate_New_Input, 30);
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.recurring_Invoice_Toggle_Switch);
        (await userActions.waitFor(5000),
            await userActions.clickOn(
                this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.line_Item_Rental_Invoice
            ));
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.start_Date);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.start_Date,
            1
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.end_Date);
        await userActions.selectOptionFromDropDownBasedOnIndex(
            this.locators.add_Additional_Fees_Section.make_This_A_Line_Item_On_The_Rental_Invoice.end_Date,
            2
        );
        await userActions.clickOn(this.locators.add_Additional_Fees_Section.create_Button);

        await assertUtils.verifyElementExistsonPage(this.locators.add_Additional_Fees_Section.recurring_Invoice_Heading);
        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation3.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation3.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation3.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation3.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.each_Tenant_Is_Only_Responsible_Checkbox);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);
        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }

    async addingM2MleaseTermDetails_Monthly_View_Edit_Rent_Scheduled() {
        let addressinformation1 = {
            fname: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            email: "test" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
        };
        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.lease_TermDetails.m2m_Lease_Type_RadioButton);
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "1500");
        await userActions.clickOn(this.locators.lease_TermDetails.due_On_Date_Dropdown);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.due_On_Date_Dropdown, 1);
        await userActions.clickOn(this.locators.lease_TermDetails.first_Invoice_Date_Input);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.lease_TermDetails.first_Invoice_Date_Input, 1);

        let count = await userActions.getElementText(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.total_Number_Of_Invoice_Count);
        await assertUtils.verifyElementToHaveText(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.total_Number_Of_Invoice_Count, count);
        console.log(count);

        await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.view_Edit_Rent_Scheduled);
        await assertUtils.verifyElementsArrayCount(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.row_List_Rent_Invoice, 12);
        await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.action_Button_Three_Dot);
        await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.edit_Button);
        await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.calender_Input);
        await calender.setNextMonthGivenDate(5);
        await userActions.enterText(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.rent_Input, 650);
        await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.save_Button);

        // await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.action_Button_Three_Dot_Second_Row);    //for second  not able to get it as loctaors are not getting worked 
        // await userActions.enterText(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.rent_Input_Second_Row, 850);
        // await userActions.clickOn(this.locators.lease_TermDetails.view_And_Edit_Rent_Scheduled.save_Button_Second_Row);

        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation1.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation1.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation1.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation1.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);
        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }



    // Fixed Term Lease cases
    async addingFixedTermLeaseDetails_Monthly() {
        let addressinformation2 = {
            fname: await randomUtils.randomAlphabets(5),
            lastname: await randomUtils.randomAlphabets(7),
            email: "test" + (await randomUtils.generateRandomNumber(4)) + "@yopmail.com",
            phone: "99999" + (await randomUtils.generateRandomNumber(5)),
        };
        await assertUtils.verifyElementExistsonPage(this.locators.addPropertyDetails.add_Lease_Button_Verify);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.lease_TermDetails.nextButton_AddLeaseTermDetails);
        await userActions.clickOn(this.locators.fixed_TermDetails.fixed_Term_Type_RadioButton);
        await userActions.clickOn(this.locators.fixed_TermDetails.calendar_Click_Input);
        await calender.setSameDateOfNextYear();
        await userActions.clickOn(this.locators.lease_TermDetails.next_Button_LeaseTermDetails);
        await userActions.enterText(this.locators.deposit_Details.deposit_Amount_Input, "150");
        await userActions.clickOn(this.locators.deposit_Details.due_On_Calendar_Input);
        await calender.setNextMonthGivenDate("3");
        await userActions.enterText(this.locators.lease_TermDetails.rent_Amount_Input, "2000");
        await userActions.clickOn(this.locators.fixed_TermDetails.due_On_Dropdown_Monthly_FixedTerm);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.fixed_TermDetails.due_On_Dropdown_Monthly_FixedTerm, 2);
        await userActions.clickOn(this.locators.fixed_TermDetails.first_Invoice_Date_Input_FixedTerm);
        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.fixed_TermDetails.first_Invoice_Date_Input_FixedTerm, 1);
        await userActions.clickOn(this.locators.add_TenantDetails.add_Tenant_Button);
        await userActions.enterText(this.locators.add_TenantDetails.fname_Input, addressinformation2.fname);
        await userActions.enterText(this.locators.add_TenantDetails.lname_Input, addressinformation2.lastname);
        await userActions.enterText(this.locators.add_TenantDetails.email_Input, addressinformation2.email);
        await userActions.enterText(this.locators.add_TenantDetails.phone_Input, addressinformation2.phone);
        await userActions.clickOn(this.locators.add_TenantDetails.application_Screening_Dropdwon);

        await userActions.selectOptionFromDropDownBasedOnIndex(this.locators.add_TenantDetails.application_Screening_Dropdwon, 4);
        await userActions.waitFor(5000);
        await userActions.clickOn(this.locators.add_TenantDetails.next_Button_TenantDetails);
        await userActions.clickOn(this.locators.renterInsurance_Details.next_Button_RenterInsuranceDetails);
        await userActions.clickOn(this.locators.finalize_Lease.offline_Signature_Checkbox);
        await userActions.clickOn(this.locators.finalize_Lease.confirm_Invite_Button);
    }
}

export default new properties_page();
