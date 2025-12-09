import assertUtils from "../../utils/assertUtils";
import randomUtils from "../../utils/randomUtils";
import userActions from "../../utils/userActions";
import innagoLoginPage from "./innago_login.page.js";
import menu_page from "./menu_page.js";
import testData from "../../mocks/testData";
import { browser } from "@wdio/globals";
import userData from "../../mocks/userData";
import calender from "../../utils/calender.js";
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
            payment_Schedule_Dropdown: {},
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
            firstPropertyCheckBox: "//ng-dropdown-panel/div[2]/div[2]/div/span",
            apply_Filter: "#apply-filter",
            clear_Filter: "#clear-filter",
            city_Label: '#city-label',
            city_Dropdown: '#city-list',
            city_Search_Input: '//div[1]/ng-select/div/div/div[2]/input',

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

    async applyFilterOnProperties(properties,city) {
        console.log("Applying filter on properties");
    //    if (properties != null) {
    //        properties = String(properties).split(",");
    //    } else {
    //        properties = []; // no properties provided
    //    }
        await userActions.clickOn(this.locators.propertyFilter.filter_Dropdown);
        if (properties !== undefined && properties !== null) {
            console.log("Filtering on properties: " + properties);
            await userActions.clickOn(this.locators.propertyFilter.property_Dropdown_Option);
            for (let i = 0; i < properties.length; i++) {
                await userActions.clearValue(this.locators.propertyFilter.property_Search_Field);
                await userActions.enterText(this.locators.propertyFilter.property_Search_Field, properties[i]);
                await userActions.waitFor(2000);
                await assertUtils.verifyElementToHaveText(this.locators.propertyFilter.firstPropertyCheckBox, properties[i]);
                await userActions.clickOn(this.locators.propertyFilter.firstPropertyCheckBox);
                await userActions.clickOn(this.locators.propertyFilter.property_Dropdown_Option); //closing the dropdown
            }
        }

        // if (city != undefined && city !== null) {
        //     //console.log("Filtering on city: " + city);
        //     await userActions.clickOn(this.locators.propertyFilter.city_Search_Input);
        //     await userActions.enterText(this.locators.propertyFilter.city_Search_Input, city); 
        //     await userActions.waitFor(5000);

        //     await userActions.clickOn(this.locators.propertyFilter.getCityAsPerName(city));
        // }

        await userActions.waitFor(2000);
        await userActions.clickOn(this.locators.propertyFilter.apply_Filter);
        await userActions.waitFor(2000);
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
        //await calender.setPreviousMonthGivenDate("15");
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
