

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
            tags_Dropdown: "",
            next_Button: '//button[@data-locator="save-info-to-move-next"]',
            cancel_Button: '//button[@data-locator="cancel-section"]',
        },
    };
}
export default new properties_page();


