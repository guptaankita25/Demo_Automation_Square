import assertUtils from "../../utils/assertUtils";
import userActions from "../../utils/userActions";
import randomUtils from "../../utils/randomUtils";
import testData from "../../mocks/testData";
import calender from "../../utils/calender";
import { th } from "@faker-js/faker";




class maintenance_Page {
    locators = {
        createMaintenance: {
            no_Maintenance_Button: '//button[@data-locator="add-button"]',
            new_Maintenance_Button: "#adding-new-maintenance",
            ticket_Title_Heading: "#ticket-title-text",
            ticket_Title_Input: '//input[@formcontrolname="ticketTitle"]',
            ticket_Title_FieldError: '//span[contains(text(),"Required Field")]',
            //#ticket-title-input+span
            property_Heading: "#property-text",
            property_Dropdown_Arrow: '//ng-select[@formcontrolname="property"]/div//span[@class="ng-arrow-wrapper"]',
            first_Property_Check: '//ng-select[@formcontrolname="property"]//ng-dropdown-panel//div[1][@role="option"]',
            second_Property_Check: '//ng-select[@formcontrolname="property"]//ng-dropdown-panel//div[2][@role="option"]',
            fourth_Property_Check: '//ng-select[@formcontrolname="property"]//ng-dropdown-panel//div[4][@role="option"]',
            unit_Heading: "#unit-text",
            unit_Dropdown_Arrow: '//ng-select[@formcontrolname="units"]/div//span[@class="ng-arrow-wrapper"]',
            first_Unit_Check: '//ng-dropdown-panel/div//div[1][@role="option"]',
            second_Unit_Check: '//ng-dropdown-panel/div//div[2][@role="option"]',
            category_Heading: '(//in-add-maintenance-form//label[@for="category"])[1]',
            getCategoryByValue: function (category) {
                //return `//h4[normalize-space()="${category}"]/parent::div/parent::label/parent::div`;
                return `//h4[normalize-space()="${category}"]/ancestor::label`;
            },

            description_Heading: '(//in-add-maintenance-form//label[@for="description"])[1]',
            description_Input: "#description-value",
            description_FieldError: "#description-value+span",
            requested_By_Heading: "#requestedBy-text",
            requested_By_Arrow: '//ng-select[@formcontrolname="requestedBy"]/div//span[@class="ng-arrow-wrapper"]',
            first_RequestedBy_Item: "//ng-dropdown-panel/div//span[1]",
            // firstRequestedByItem: '//ng-select[@formcontrolname="requestedBy"]/ng-dropdown-panel/div/div[2]/div[1]/span',
            // secondRequestedByItem: '//ng-select[@formcontrolname="requestedBy"]/ng-dropdown-panel/div/div[2]/div[2]/span',
            isUrgent: "#urgent-checkbox",
            notifyTenant: "#notifyTenant-checkbox",
            attachFile_Button: "#browse",
            cancel_Button: "#cancel-button",
            create_Button: "#create-button",

            add_New_Category_Button: {
                add_New_Category_Button_Locator: '//h5[contains(text(), "Add New Category")]',
            },

            markAsResolved_Button: {
                markAsResolved_Button_Locator: "#mark-as-resolved-text",
                note_Input: "#note-value",
                notify_Tenant_Checkbox: "#notify-tenant-checkbox",
                resloved_Button: "#sidepanel-primary-button",
                reopen_Button: "#mark-as-resolved-text",
            },

            forwardMaintenance_Button: {
                forwardMaintenance_Button_Locator: "#forward-maintenance-text",
                vendor_Email: "#vendor-email",
                share_Contact_Info_Toggle: "#add-tenant-toggle",
                send_Button: "#send-btn",
                cancel_Button: "#cancel-btn",
                tenant_Dropdown: '//div[@role="combobox"]',
                current_Tenant_FirstOption: '//div[@class="ng-dropdown-panel-items scroll-host"]/div[2]/div[2]',
            },

            setReminder_Recurrence_Button: {
                setReminder_Recurrence_Button_Locator: "#set-reminder-text",
                calender_Input_Click: '//input[@id="due-date"]',
                save_Button: "#sidepanel-primary-button",
                cancel_Button: "#sidepanel-secondary-button",
                recurring_toggle: {
                    recurring_toggle_Locator: "#recurring-toggle",
                    repeat_Every_Label: "#repeats-every-label",
                    repeat_Every_Input: "#recur-every-input",
                    repeat_Every_Dropdown_Click: '//ng-select[@formcontrolname="recurrenceTypeId"]',
                    repeat_Every_Dropdown_Week: "//ng-dropdown-panel/div/div[2]/div[2]",
                    repeat_Every_Dropdown_Month: "//ng-dropdown-panel/div/div[2]/div[3]",
                    repeat_Every_Dropdown_Year: "//ng-dropdown-panel/div/div[2]/div[4]",
                    end_Never_Radio: "#recurrenceEndOptionId-never-radio",
                    end_On_Radio: "#recurrenceEndOptionId-on-radio",
                    end_On_calender_Input: "#recurrenceEndOptionId-on-datepicker",
                    end_After_Radio: "#recurrenceEndOptionId-after-radio",
                    end_After_Input: "#endsAfterOccurrences-input",
                    save_Button_Recurring: "#sidepanel-primary-button",
                    cancel_Button_Recurring: "#sidepanel-secondary-button",
                },
                add_Team_Members_To_Remind_Toggle: {
                    add_Team_Members_To_Remind_Toggle_Locator: "#add-sub-user-toggle",
                    dropdwon_Click: '//ng-select[@formcontrolname="subUsers"]/div',
                    first_Option_Click: '//ng-select[@formcontrolname="subUsers"]//ng-dropdown-panel/div/div/div[1]',
                    second_Option_Click: '//ng-select[@formcontrolname="subUsers"]//ng-dropdown-panel/div/div/div[2]',
                },

                add_Tenants_To_Remind_Toggle: {
                    add_Tenants_To_Remind_Toggle_Locator: "#add-tenant-toggle",
                    dropdwon_Click_Tenant: '//ng-select[@formcontrolname="tenants"]/div',
                    first_Option_Click_Tenant: '//ng-select[@formcontrolname="tenants"]/ng-dropdown-panel/div/div/div[1]',
                    second_Option_Click_Tenant: '//ng-select[@formcontrolname="tenants"]/ng-dropdown-panel/div/div/div[2]',
                },

                recurring_Card: {
                    //action_button_Click: '//in-recurring//div//div[2]/div//div[@id="recurring-open-option-0"]',
                    action_button_Click: '//div[@id="recurring-open-option-0"]',
                    mark_As_Done_Button: "#mark-as-done-btn",
                    enter_Notes_Input: "#note-value",
                    calender_Input_Click: "#mark-resolved-date",
                    notify_Tenant_Checkbox: "#notify-tenant-checkbox",

                    save_Button: "#sidepanel-primary-button",
                    cancel_Button: "#sidepanel-secondary-button",
                },
            },
        },

        Filter_Maintenance: {
            filter_Maintenance_Click: "#filter-dropdown",
            property_Dropdown_Option_Maintenance: '//ng-select[@data-locator="multi-select-v3-custom-ng-select"]',
            property_Serach_Field_Input: '[data-locator="multi-select-v3-search-input"]',
            //first_Property_Checkbox_Maintenance: '//div[@class="ng-dropdown-panel-items scroll-host"]//div[1]/span',
            first_Property_Checkbox_Maintenance: '(//div[contains(@class,"ng-dropdown-panel")]//div[contains(@class,"ng-option")])[1]',
            status_Dropdwon_Option_Click: '//ng-select[@formcontrolname="statusIds"]',
            staus_Dropdwon_Open: '//div[@class="ng-dropdown-panel-items scroll-host"]//div//div[1]',
            status_Dropdwon_Resolved: '//div[@class="ng-dropdown-panel-items scroll-host"]//div//div[2]',
            Status_Dropdown_Scheduled: '//div[@class="ng-dropdown-panel-items scroll-host"]//div//div[3]',
            apply_Filter_Button: "#apply-filter",
            clear_Filter_Button: "#clear-filter",
            cross_Icon: '//in-icon[@name="cross-icon"]',
            statusByText: (status) => {
                return `//span[text()="${status}"]/parent::div`;
            },
        },
    };

    //functions related to maintenance page can be added here

    async clickNewMaintenanceButton() {
        let category = await randomUtils.getRandomValueFromArray(testData.po.maintenance.category_List);
        let imageFilePath = process.cwd() + "/mocks/common/pic_1.png";
        let maintenanceData = {
            ticketTitle: `${await randomUtils.randomAlphabets(8)}`,
            descriptionText: `There is some issue with ${category}.`,
            categoryName: category,
            propertyName: null,
            propertyUnit: null,
            //status: null,
        };

        await userActions.clickOn(this.locators.createMaintenance.new_Maintenance_Button);
        await userActions.waitFor(2000);
        await userActions.enterText(this.locators.createMaintenance.ticket_Title_Input, maintenanceData.ticketTitle);
        // i need to select property from dropdwon
        await userActions.clickOn(this.locators.createMaintenance.property_Dropdown_Arrow);
        await userActions.clickOn(this.locators.createMaintenance.second_Property_Check);
        maintenanceData.propertyName = await userActions.getElementText(this.locators.createMaintenance.second_Property_Check);

        // i need to select unit from dropdown
        await userActions.clickOn(this.locators.createMaintenance.unit_Dropdown_Arrow);
        await userActions.clickOn(this.locators.createMaintenance.first_Unit_Check);
        maintenanceData.propertyUnit = await userActions.getElementText(this.locators.createMaintenance.first_Unit_Check);

        console.log("Selecting category:", category);
        await userActions.clickOn(this.locators.createMaintenance.getCategoryByValue(category));
        await userActions.enterText(this.locators.createMaintenance.description_Input, maintenanceData.descriptionText);
        // await userActions.changeElementStyleToBlock(this.locators.createMaintenance.attachFile_Button);
        // await userActions.uploadFile(this.locators.createMaintenance.attachFile_Button, imageFilePath);   // this upload file function is not working here as it is browser or drag & drop
        await userActions.clickOn(this.locators.createMaintenance.create_Button);
        await userActions.waitFor(5000);
        return maintenanceData;
    }

    async markAsResolved() {
        let noteText = await randomUtils.randomAlphabets(10);
        await userActions.clickOn(this.locators.createMaintenance.markAsResolved_Button.markAsResolved_Button_Locator);
        await userActions.clickOn(this.locators.createMaintenance.markAsResolved_Button.note_Input);
        await userActions.enterText(this.locators.createMaintenance.markAsResolved_Button.note_Input, noteText);
        await userActions.clickOn(this.locators.createMaintenance.markAsResolved_Button.resloved_Button);
    }

    async reopenTicket() {
        await userActions.clickOn(this.locators.createMaintenance.markAsResolved_Button.reopen_Button);
    }

    async forwardMaintenanceTicketToVendor() {
        let vendorEmail1 = "Random" + (await randomUtils.randomAlphabets(7)) + "@yopmail.com";
        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.forwardMaintenance_Button_Locator);
        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.vendor_Email);
        await userActions.enterText(this.locators.createMaintenance.forwardMaintenance_Button.vendor_Email, vendorEmail1);

        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.share_Contact_Info_Toggle);
        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.tenant_Dropdown);
        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.current_Tenant_FirstOption);

        await userActions.clickOn(this.locators.createMaintenance.forwardMaintenance_Button.send_Button);
    }

    async setReminderOnly() {
        //code for setting reminder only
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.setReminder_Recurrence_Button_Locator);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.calender_Input_Click);
        await calender.setNextMonthGivenDate(8);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.save_Button);
    }

    async setReminderWithRecurrence() {
        //code for setting reminder and recurrence
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.setReminder_Recurrence_Button_Locator);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.calender_Input_Click);
        await calender.setNextMonthGivenDate(8);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.recurring_toggle_Locator);
        await assertUtils.verifyElementExistsonPage(
            this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.repeat_Every_Label,
        );
        await userActions.enterText(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.repeat_Every_Input, "10");
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.repeat_Every_Dropdown_Click);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.repeat_Every_Dropdown_Month);

        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.end_On_Radio);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_toggle.end_On_calender_Input);
        await calender.setNextMonthGivenDate(15);
        await userActions.clickOn(
            this.locators.createMaintenance.setReminder_Recurrence_Button.add_Team_Members_To_Remind_Toggle.add_Team_Members_To_Remind_Toggle_Locator,
        );
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.add_Team_Members_To_Remind_Toggle.dropdwon_Click);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.add_Team_Members_To_Remind_Toggle.first_Option_Click);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.add_Team_Members_To_Remind_Toggle.dropdwon_Click);
        await userActions.clickOn(
            this.locators.createMaintenance.setReminder_Recurrence_Button.add_Tenants_To_Remind_Toggle.add_Tenants_To_Remind_Toggle_Locator,
        );
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.add_Tenants_To_Remind_Toggle.dropdwon_Click_Tenant);
        await userActions.clickOn(
            this.locators.createMaintenance.setReminder_Recurrence_Button.add_Tenants_To_Remind_Toggle.first_Option_Click_Tenant,
        );
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.add_Tenants_To_Remind_Toggle.dropdwon_Click_Tenant);

        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.save_Button);

        await userActions.waitFor(5000);

        // now marking the recurrening maintenance as done

        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.action_button_Click);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.mark_As_Done_Button);
        let notesTextRecurring = await randomUtils.randomAlphabets(11);

        await userActions.enterText(
            this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.enter_Notes_Input,
            notesTextRecurring,
        );
        //await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.calender_Input_Click);
        //await calender.setNextMonthGivenDate(20);

        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.notify_Tenant_Checkbox);
        await userActions.clickOn(this.locators.createMaintenance.setReminder_Recurrence_Button.recurring_Card.save_Button);
    }

    async filterMaintenanceTickets(properties, maintenancestatus) {
        // status , catgrory
        await userActions.clickOn(this.locators.Filter_Maintenance.cross_Icon);
        await userActions.clickOn(this.locators.Filter_Maintenance.filter_Maintenance_Click);

        if (properties !== undefined && properties !== null) {
            await userActions.clickOn(this.locators.Filter_Maintenance.property_Dropdown_Option_Maintenance);
            for (let i = 0; i < properties.length; i++) {
                await userActions.clearValue(this.locators.Filter_Maintenance.property_Serach_Field_Input);
                await userActions.enterText(this.locators.Filter_Maintenance.property_Serach_Field_Input, properties[i]);
                await userActions.waitFor(2000);
                await assertUtils.verifyElementToHaveText(this.locators.Filter_Maintenance.first_Property_Checkbox_Maintenance, properties[i]);
                await userActions.clickOn(this.locators.Filter_Maintenance.first_Property_Checkbox_Maintenance);

                await userActions.clickOn(this.locators.Filter_Maintenance.property_Dropdown_Option_Maintenance); // to open dropdown again for next property

                await userActions.waitFor(2000);
                await userActions.clickOn(this.locators.Filter_Maintenance.apply_Filter_Button);
                await userActions.waitFor(5000);

            }
        }

        //     if (maintenancestatus !== undefined && maintenancestatus !== null) {
        //         await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);
        //         for (let i = 0; i < maintenancestatus.length; i++) {
        //             await userActions.clickOn(this.locators.Filter_Maintenance.statusByText(maintenancestatus[i]));
        //         }
        //         await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);
        //     else {
        //             await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);
        //             await userActions.clickOn(this.locators.Filter_Maintenance.statusByText(maintenancestatus));
        //             await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);

        //         }
        
        //     }


        //     await userActions.clickOn(this.locators.Filter_Maintenance.apply_Filter_Button);
        //     await userActions.waitFor(5000);
        // }

        // if (maintenancestatus !== undefined && maintenancestatus !== null) {
        //     await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);
        //     await userActions.clickOn(this.locators.Filter_Maintenance.statusByText(maintenancestatus));
        //     await userActions.clickOn(this.locators.Filter_Maintenance.status_Dropdwon_Option_Click);
        // }

        // await userActions.clickOn(this.locators.Filter_Maintenance.apply_Filter_Button);
        // await userActions.waitFor(5000);











    }







}






export default new maintenance_Page();


