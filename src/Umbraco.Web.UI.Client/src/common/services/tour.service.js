(function () {
    'use strict';

    function tourService(eventsService, localStorageService) {

        var localStorageKey = "umbTours";

        var tours = [
            {
                "name": "Introduction",
                "alias": "umbIntroIntroduction",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "Welcome to Umbraco - The Friendly CMS",
                        content: "<p>Thank you for choosing Umbraco - we think this could be the beginning of something beautiful. While it may feel overwhelming at first, we've done a lot to make the learning curve as smooth and fast as possible.</p>",
                        type: "intro"
                    },
                    {
                        element: "#applications",
                        title: "Sections",
                        content: "These are the <b>Sections</b> and allows you to navigate the different areas of Umbraco"
                    },
                    {
                        element: "#tree",
                        title: "The Tree",
                        content: "This is the <b>Tree</b> and contains all the pages of your website"
                    },
                    {
                        element: "[data-element='global-search-field']",
                        title: "Search",
                        content: "The search allows you to quickly find content across sections within Umbraco"
                    },
                    {
                        element: "#applications [data-element='section-user']",
                        title: "User profile",
                        content: "Click here to open the user profile dialog",
                        event: "click"
                    },
                    {
                        element: "[data-element~='overlay-user']",
                        title: "User profile",
                        content: "This is where you can see details about your user, change your password and log out of Umbraco"
                    },
                    {
                        element: "[data-element~='overlay-user'] [data-element='button-testy']",
                        title: "User profile",
                        content: "This is where you can see details about your user, change your password and log out of Umbraco",
                        event: "click"
                    },
                    /*
                    {
                        element: "[data-element~='overlay-user'] [data-element~='button-change-password']",
                        title: "User profile",
                        content: "This is where you can see details about your user, change your password and log out of Umbraco",
                        event: "click"
                    },
                    */
                    {
                        element: "[data-element~='overlay-user'] [data-element='overlay-close']",
                        title: "User profile",
                        content: "Let's close the user profile again",
                        event: "click"
                    },
                    {
                        element: "#applications [data-element='section-help']",
                        title: "Help",
                        content: "If you ever find yourself in trouble click here to open the help drawer",
                        event: "click"
                    },
                    {
                        element: "[data-element='drawer']",
                        title: "Help",
                        content: "<p>In the help drawer you can find articles and videos related to the section you are using.</p><p>You will also find more tours like this which will help you get started with Umbraco.</p>"
                    }
                ]
            },
            {
                "name": "Create document type",
                "alias": "umbIntroCreateDocType",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "Create your first Document Type",
                        content: "<p>Step 1 of any site is to create a <strong>Document Type</strong>. A Document Type is a data container where you can add data fields. The editor can then input data and Umbraco can use it to output it in the relevant parts of a <strong>template</strong>.</p><p>In this tour you will learn how to set up a basic Document Type with a data field to enter some text.</p>",
                        type: "intro"
                    },
                    {
                        element: "#applications [data-element='section-settings']",
                        title: "Navigate to the settings sections",
                        content: "In the settings section we will find the document types",
                        event: "click"
                    },
                    {
                        element: "#tree [data-element='tree-item-documentTypes']",
                        title: "Create document type",
                        content: "<p>Hover the document types tree and click the <b>three small dots</b> to open the context menu</p>",
                        event: "click",
                        eventElement: "#tree [data-element='tree-item-documentTypes'] [data-element='tree-item-options']"
                    },
                    {
                        element: "#dialog [data-element='action-documentType']",
                        title: "Create document type",
                        content: "Click <b>Document Type</b> to create a new document type with a template",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-name-field']",
                        title: "Enter a name",
                        content: "<p>Our document type needs a name. Enter <b>Home</b> in the field and click <i>Next</i></p>",
                        view: "doctypename"
                    },
                    {
                        element: "[data-element='editor-description']",
                        title: "Enter a description",
                        content: "<p>A description helps the content editor pick the right document type when creating content:<br/><pre>The home to our website</pre></p>"
                    },
                    {
                        element: "[data-element='group-add']",
                        title: "Add tab",
                        content: "Tabs help us organize the content on a content page. Click <b>Add new tab</b> to add a tab.",
                        event: "click"
                    },
                    {
                        element: "[data-element='group-name']",
                        title: "Enter a name",
                        content: "Enter <b>Content</b> in the tab name"
                    },
                    {
                        element: "[data-element='property-add']",
                        title: "Add a property",
                        content: "<p>Properties are the different types of data on our content page.</p><p>On our Home page we wan't to add a welcome text.</p><p>Click <b>Add property</b> to open the property dialog</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element~='overlay-property-settings'] [data-element='property-name']",
                        title: "Enter a name",
                        content: "Enter <b>Welcome Text</b> as name for the property",
                        view: "propertyname"
                    },
                    {
                        element: "[data-element~='overlay-property-settings'] [data-element='property-description']",
                        title: "Enter a description",
                        content: "Enter a description for the property editor:<br/> <pre>Write a nice introduction text so the visitors feel welcome</pre>"
                    },
                    {
                        element: "[data-element~='overlay-property-settings'] [data-element='editor-add']",
                        title: "Add editor",
                        content: "The editor define what data type the property is. Click <b>Add editor</b> to open the editor picker dialog",
                        event: "click"
                    },
                    {
                        element: "[data-element~='overlay-editor-picker']",
                        title: "Editor picker",
                        content: "<p>In the editor picker dialog we can pick one of the many build in editor.</p>"
                    },
                    {
                        element: "[data-element~='overlay-editor-picker'] [data-element='editor-Textarea']",
                        title: "Select editor",
                        content: "Select the <b>Textarea</b> editor which allows the content editor to enter long texts",
                        event: "click"
                    },
                    {
                        element: "[data-element~='overlay-editor-settings']",
                        title: "Editor settings",
                        content: "Each editor can have individual settings. We don't need to change any of these now."
                    },
                    {
                        element: "[data-element~='overlay-editor-settings'] [data-element='overlay-submit']",
                        title: "Save editor",
                        content: "Click <b>Submit</b> to save the editor and any changes you may have made to the editor settings.",
                        event: "click"
                    },
                    {
                        element: "[data-element~='overlay-property-settings'] [data-element='overlay-submit']",
                        title: "Save property",
                        content: "Click <b>Submit</b> to add the property",
                        event: "click"
                    },
                    {
                        element: "[data-element='button-group-primary']",
                        title: "Save the document type",
                        content: "Click <b>Save</b> to create your document type",
                        event: "click"
                    }
                ]
            },
            {
                "name": "Create Content",
                "alias": "umbIntroCreateContent",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "Creating your first content node",
                        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in euismod velit. Aliquam sit amet turpis in velit convallis bibendum. Suspendisse venenatis porttitor ipsum eu eleifend.</p>",
                        type: "intro"
                    },
                    {
                        element: "[data-element='tree-root']",
                        title: "Open context menu",
                        content: "<p>Open the context menu by hovering the root of the content section.</p><p>Now click the <b>three small dots</b> to the right</p>",
                        event: "click",
                        eventElement: "[data-element='tree-root'] [data-element='tree-item-options']"
                    },
                    {
                        element: "[data-element='action-create-home']",
                        title: "Create Home page",
                        content: "<p>Click on <b>Home</b> to create a new page of type <i>Home</i></p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-content'] [data-element='editor-name-field']",
                        title: "Give your new page a name",
                        content: "<p>Our new page needs a name. Enter <b>Home</b> in the field and click <i>Next</i></p>",
                        view: "nodename"
                    },
                    {
                        element: "[data-element='editor-content'] [data-element='property-welcomeText']",
                        title: "Add a welcome text",
                        content: "<p>Add content to the <b>Welcome Text</b> field</p><p>If you don't have any ideas here is a start:<br/> <pre>I am learning Umbraco. High Five I Rock #H5IR</pre></p>"
                    },
                    {
                        element: "[data-element='editor-content'] [data-element='button-group-primary']",
                        title: "Save and publish",
                        content: "<p>Now click the <b>Save and publish</b> button to save and publish your changes</p>",
                        event: "click"
                    }
                ]
            },
            {
                "name": "Render in template",
                "alias": "umbIntroRenderInTemplate",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "Render your content in a template",
                        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in euismod velit. Aliquam sit amet turpis in velit convallis bibendum. Suspendisse venenatis porttitor ipsum eu eleifend.</p>",
                        type: "intro"
                    },
                    {
                        element: "#applications [data-element='section-settings']",
                        title: "Navigate to the settings section",
                        content: "In the <b>Settings</b> section you will find the templates for all your document types",
                        event: "click"
                    },
                    {
                        element: "#tree [data-element='tree-item-templates']",
                        title: "Expand the Templates node",
                        content: "<p>To see all our templates click the <b>small triangle</b> to the left of the templates node</p>",
                        event: "click",
                        eventElement: "#tree [data-element='tree-item-templates'] [data-element='tree-item-expand']",
                        view: "templatetree"
                    },
                    {
                        element: "#tree [data-element='tree-item-templates'] [data-element='tree-item-Home']",
                        title: "Open Home template",
                        content: "<p>Click the <b>Home</b> template to open and edit it</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-templates'] [data-element='code-editor']",
                        title: "Edit template",
                        content: '<p>Templates can be edited here or in your favorite code editor.</p><p>To render the value we entered on the <b>Home</b> page add the following to the template:<br/> <pre>@Model.Content.GetPropertyValue("welcomeText")</pre></p>'
                    },
                    {
                        element: "[data-element='editor-templates'] [data-element='button-save']",
                        title: "Save the template",
                        content: "Click the save button and your template will be saved",
                        event: "click"
                    }
                ]
            },
            {
                "name": "View Home page",
                "alias": "umbIntroViewHomePage",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "View your Umbraco site",
                        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in euismod velit. Aliquam sit amet turpis in velit convallis bibendum. Suspendisse venenatis porttitor ipsum eu eleifend.</p>",
                        type: "intro"
                    },
                    {
                        element: "#tree [data-element='tree-item-Home']",
                        title: "Open the Home page",
                        content: "<p>Click the <b>Home</b> page to open it</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-content'] [data-element='tab-Generic properties']",
                        title: "Properties",
                        content: "<p>Under the properties tab you will find default information about the content item</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-content'] [data-element='property-_umb_urls']",
                        title: "Open page",
                        content: "<p>Click the <b>Link</b> to view your page.</p><p>Tip: Click the preview button in the bottom right corner to preview changes without publishing them</p>",
                        event: "click",
                        eventElement: "[data-element='editor-content'] [data-element='property-_umb_urls'] a[target='_blank']"
                    }
                ]
            },
            {
                "name": "The media library",
                "alias": "umbIntroMediaSection",
                "group": "Getting Started",
                "steps": [
                    {
                        title: "How to use the media library",
                        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in euismod velit. Aliquam sit amet turpis in velit convallis bibendum. Suspendisse venenatis porttitor ipsum eu eleifend.</p>",
                        type: "intro"
                    },
                    {
                        element: "#applications [data-element='section-media']",
                        title: "Navigate to the media section",
                        content: "The media section is where you will manage all your media items",
                        event: "click"
                    },
                    {
                        element: "#tree [data-element='tree-root']",
                        title: "Create a new folder",
                        content: "<p>Hover the media root and click the <b>three small dots</b> on the right side of the item</p>",
                        event: "click",
                        eventElement: "#tree [data-element='tree-root'] [data-element='tree-item-options']"
                    },
                    {
                        element: "#dialog [data-element='action-Folder']",
                        title: "Create a new folder",
                        content: "<p>Select the <b>Folder</b> options to create a new folder</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='editor-name-field']",
                        title: "Enter a name",
                        content: "<p>Enter <b>'My folder'</b> in the field</p>"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='button-save']",
                        title: "Save the folder",
                        content: "<p>Click the <b>Save</b> button to create the new folder</p>",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='dropzone']",
                        title: "Upload images",
                        content: "<p>In the upload area you can upload your media items.</p><p>Click the <b>Upload button</b> and select some images on your computer and upload them.</p>",
                        view: "uploadimages"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='media-grid-item-0']",
                        title: "View media item details",
                        content: "Hover the media item and <b>Click the purple bar</b> to view details about the media item",
                        event: "click",
                        eventElement: "[data-element='editor-media'] [data-element='media-grid-item-0'] [data-element='media-grid-item-edit']"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='property-umbracoFile']",
                        title: "The uploaded image",
                        content: "<p>Here you can see the image you have uploaded.</p><p>Use the dot in the center of the image to set a focal point on the image.</p>"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='property-umbracoBytes']",
                        title: "Image size",
                        content: "<p>You will also find other details about the image, like the size</p><p>You can add extra properties to an image by creating or editing the <b>Media types</b></p>"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='tab-Generic properties']",
                        title: "Properties",
                        content: "Like the content section you can also find default properties about the media item. You will find these under the properties tab",
                        event: "click"
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='property-_umb_urls']",
                        title: "Link to media",
                        content: "The path to the media item..."
                    },
                    {
                        element: "[data-element='editor-media'] [data-element='property-_umb_updatedate']",
                        title: "Last edited",
                        content: "...and information about when the item has been created and edited."
                    }
                ]
            }
        ];

        function startTour(tour) {
            eventsService.emit("appState.tour.start", tour);
        }

        function endTour() {
            eventsService.emit("appState.tour.end");
        }

        function completeTour(tour) {
            saveInLocalStorage(tour);
            eventsService.emit("appState.tour.complete", tour);
        }
        
        function getAllTours() {
            setCompletedTours();
            return tours;
        }

        function getGroupedTours() {
            setCompletedTours();
            var groupedTours = _.groupBy(tours, "group");
            return groupedTours;
        }

        function getTourByAlias(tourAlias) {
            var tour = _.findWhere(tours, {alias: tourAlias});
            return tour;
        }

        function getCompletedTours() {
            var completedTours = localStorageService.get(localStorageKey);
            var aliases = _.pluck(completedTours, "alias");
            return aliases;
        }

        ///////////

        function setCompletedTours() {

            var storedTours = [];

            if (localStorageService.get(localStorageKey)) {
                storedTours = localStorageService.get(localStorageKey);
            }

            angular.forEach(storedTours, function (storedTour) {
                if (storedTour.completed === true) {
                    angular.forEach(tours, function (tour) {
                        if (storedTour.alias === tour.alias) {
                            tour.completed = true;
                        }
                    });
                }
            });

        }

        function saveInLocalStorage(tour) {
            var storedTours = [];
            var tourFound = false;

            if (localStorageService.get(localStorageKey)) {
                storedTours = localStorageService.get(localStorageKey);
            }

            if (storedTours.length > 0) {
                angular.forEach(storedTours, function (storedTour) {
                    if (storedTour.alias === tour.alias) {
                        storedTour.completed = true;
                        tourFound = true;
                    }
                });
            }

            if (!tourFound) {
                var storageObject = {
                    "alias": tour.alias,
                    "completed": true
                };
                storedTours.push(storageObject);
            }

            localStorageService.set(localStorageKey, storedTours);

        }

        var service = {
            startTour: startTour,
            endTour: endTour,
            completeTour: completeTour,
            getAllTours: getAllTours,
            getGroupedTours: getGroupedTours,
            getTourByAlias: getTourByAlias,
            getCompletedTours: getCompletedTours
        };

        return service;

    }

    angular.module("umbraco.services").factory("tourService", tourService);

})();
