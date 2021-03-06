(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  "@context": {
    "@vocab": "http://schema.org/",
    "schema": "http://schema.org/",
    "cat": "http://www.w3.org/ns/dcat#",
    "cc": "http://creativecommons.org/ns#",
    "cnt": "http://www.w3.org/2008/content#",
    "ctag": "http://commontag.org/ns#",
    "dc": "http://purl.org/dc/terms/",
    "dcat": "http://www.w3.org/ns/dcat#",
    "dcterms": "http://purl.org/dc/terms/",
    "describedby": "http://www.w3.org/2007/05/powder-s#describedby",
    "earl": "http://www.w3.org/ns/earl#",
    "foaf": "http://xmlns.com/foaf/0.1/",
    "gldp": "http://www.w3.org/ns/people#",
    "gr": "http://purl.org/goodrelations/v1#",
    "grddl": "http://www.w3.org/2003/g/data-view#",
    "ht": "http://www.w3.org/2006/http#",
    "ical": "http://www.w3.org/2002/12/cal/icaltzd#",
    "license": {
      "@id": "schema:license",
      "@type": "@id"
    },
    "ma": "http://www.w3.org/ns/ma-ont#",
    "og": "http://ogp.me/ns#",
    "org": "http://www.w3.org/ns/org#",
    "owl": "http://www.w3.org/2002/07/owl#",
    "prov": "http://www.w3.org/ns/prov#",
    "ptr": "http://www.w3.org/2009/pointers#",
    "qb": "http://purl.org/linked-data/cube#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfa": "http://www.w3.org/ns/rdfa#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "rev": "http://purl.org/stuff/rev#",
    "rif": "http://www.w3.org/2007/rif#",
    "role": "https://science.ai/role/",
    "rr": "http://www.w3.org/ns/r2rml#",
    "sd": "http://www.w3.org/ns/sparql-service-description#",
    "sioc": "http://rdfs.org/sioc/ns#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "skosxl": "http://www.w3.org/2008/05/skos-xl#",
    "v": "http://rdf.data-vocabulary.org/#",
    "vcard": "http://www.w3.org/2006/vcard/ns#",
    "void": "http://rdfs.org/ns/void#",
    "wdr": "http://www.w3.org/2007/05/powder#",
    "wdrs": "http://www.w3.org/2007/05/powder-s#",
    "xhv": "http://www.w3.org/1999/xhtml/vocab#",
    "xml": "http://www.w3.org/XML/1998/namespace",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "AMRadioChannel": {
      "@id": "schema:AMRadioChannel"
    },
    "APIReference": {
      "@id": "schema:APIReference"
    },
    "Abdomen": {
      "@id": "schema:Abdomen"
    },
    "AboutPage": {
      "@id": "schema:AboutPage"
    },
    "AcceptAction": {
      "@id": "schema:AcceptAction"
    },
    "Accommodation": {
      "@id": "schema:Accommodation"
    },
    "AccountingService": {
      "@id": "schema:AccountingService"
    },
    "AchieveAction": {
      "@id": "schema:AchieveAction"
    },
    "Action": {
      "@id": "schema:Action"
    },
    "ActionStatusType": {
      "@id": "schema:ActionStatusType"
    },
    "ActivateAction": {
      "@id": "schema:ActivateAction"
    },
    "ActiveActionStatus": {
      "@id": "schema:ActiveActionStatus"
    },
    "ActiveNotRecruiting": {
      "@id": "schema:ActiveNotRecruiting"
    },
    "AddAction": {
      "@id": "schema:AddAction"
    },
    "AdministrativeArea": {
      "@id": "schema:AdministrativeArea"
    },
    "AdultEntertainment": {
      "@id": "schema:AdultEntertainment"
    },
    "AerobicActivity": {
      "@id": "schema:AerobicActivity"
    },
    "AggregateOffer": {
      "@id": "schema:AggregateOffer"
    },
    "AggregateRating": {
      "@id": "schema:AggregateRating"
    },
    "AgreeAction": {
      "@id": "schema:AgreeAction"
    },
    "Airline": {
      "@id": "schema:Airline"
    },
    "Airport": {
      "@id": "schema:Airport"
    },
    "AlbumRelease": {
      "@id": "schema:AlbumRelease"
    },
    "AlignmentObject": {
      "@id": "schema:AlignmentObject"
    },
    "AllWheelDriveConfiguration": {
      "@id": "schema:AllWheelDriveConfiguration"
    },
    "AllocateAction": {
      "@id": "schema:AllocateAction"
    },
    "AmusementPark": {
      "@id": "schema:AmusementPark"
    },
    "AnaerobicActivity": {
      "@id": "schema:AnaerobicActivity"
    },
    "AnatomicalStructure": {
      "@id": "schema:AnatomicalStructure"
    },
    "AnatomicalSystem": {
      "@id": "schema:AnatomicalSystem"
    },
    "Anesthesia": {
      "@id": "schema:Anesthesia"
    },
    "AnimalShelter": {
      "@id": "schema:AnimalShelter"
    },
    "Answer": {
      "@id": "schema:Answer"
    },
    "Apartment": {
      "@id": "schema:Apartment"
    },
    "ApartmentComplex": {
      "@id": "schema:ApartmentComplex"
    },
    "Appearance": {
      "@id": "schema:Appearance"
    },
    "AppendAction": {
      "@id": "schema:AppendAction"
    },
    "ApplyAction": {
      "@id": "schema:ApplyAction"
    },
    "ApprovedIndication": {
      "@id": "schema:ApprovedIndication"
    },
    "Aquarium": {
      "@id": "schema:Aquarium"
    },
    "ArriveAction": {
      "@id": "schema:ArriveAction"
    },
    "ArtGallery": {
      "@id": "schema:ArtGallery"
    },
    "Artery": {
      "@id": "schema:Artery"
    },
    "Article": {
      "@id": "schema:Article"
    },
    "AskAction": {
      "@id": "schema:AskAction"
    },
    "AssessAction": {
      "@id": "schema:AssessAction"
    },
    "AssignAction": {
      "@id": "schema:AssignAction"
    },
    "Atlas": {
      "@id": "schema:Atlas"
    },
    "Attorney": {
      "@id": "schema:Attorney"
    },
    "Audience": {
      "@id": "schema:Audience"
    },
    "AudioObject": {
      "@id": "schema:AudioObject"
    },
    "Audiobook": {
      "@id": "schema:Audiobook"
    },
    "AudiobookFormat": {
      "@id": "schema:AudiobookFormat"
    },
    "AuthorizeAction": {
      "@id": "schema:AuthorizeAction"
    },
    "AutoBodyShop": {
      "@id": "schema:AutoBodyShop"
    },
    "AutoDealer": {
      "@id": "schema:AutoDealer"
    },
    "AutoPartsStore": {
      "@id": "schema:AutoPartsStore"
    },
    "AutoRental": {
      "@id": "schema:AutoRental"
    },
    "AutoRepair": {
      "@id": "schema:AutoRepair"
    },
    "AutoWash": {
      "@id": "schema:AutoWash"
    },
    "AutomatedTeller": {
      "@id": "schema:AutomatedTeller"
    },
    "AutomotiveBusiness": {
      "@id": "schema:AutomotiveBusiness"
    },
    "Ayurvedic": {
      "@id": "schema:Ayurvedic"
    },
    "Bacteria": {
      "@id": "schema:Bacteria"
    },
    "Bakery": {
      "@id": "schema:Bakery"
    },
    "Balance": {
      "@id": "schema:Balance"
    },
    "BankAccount": {
      "@id": "schema:BankAccount"
    },
    "BankOrCreditUnion": {
      "@id": "schema:BankOrCreditUnion"
    },
    "BarOrPub": {
      "@id": "schema:BarOrPub"
    },
    "Barcode": {
      "@id": "schema:Barcode"
    },
    "Beach": {
      "@id": "schema:Beach"
    },
    "BeautySalon": {
      "@id": "schema:BeautySalon"
    },
    "BedAndBreakfast": {
      "@id": "schema:BedAndBreakfast"
    },
    "BedDetails": {
      "@id": "schema:BedDetails"
    },
    "BedType": {
      "@id": "schema:BedType"
    },
    "BefriendAction": {
      "@id": "schema:BefriendAction"
    },
    "BikeStore": {
      "@id": "schema:BikeStore"
    },
    "Blog": {
      "@id": "schema:Blog"
    },
    "BlogPosting": {
      "@id": "schema:BlogPosting"
    },
    "BloodTest": {
      "@id": "schema:BloodTest"
    },
    "BoardingPolicyType": {
      "@id": "schema:BoardingPolicyType"
    },
    "BodyOfWater": {
      "@id": "schema:BodyOfWater"
    },
    "Bone": {
      "@id": "schema:Bone"
    },
    "Book": {
      "@id": "schema:Book"
    },
    "BookFormatType": {
      "@id": "schema:BookFormatType"
    },
    "BookSeries": {
      "@id": "schema:BookSeries"
    },
    "BookStore": {
      "@id": "schema:BookStore"
    },
    "BookmarkAction": {
      "@id": "schema:BookmarkAction"
    },
    "Boolean": {
      "@id": "schema:Boolean"
    },
    "BorrowAction": {
      "@id": "schema:BorrowAction"
    },
    "BowlingAlley": {
      "@id": "schema:BowlingAlley"
    },
    "BrainStructure": {
      "@id": "schema:BrainStructure"
    },
    "Brand": {
      "@id": "schema:Brand"
    },
    "BreadcrumbList": {
      "@id": "schema:BreadcrumbList"
    },
    "Brewery": {
      "@id": "schema:Brewery"
    },
    "Bridge": {
      "@id": "schema:Bridge"
    },
    "BroadcastChannel": {
      "@id": "schema:BroadcastChannel"
    },
    "BroadcastEvent": {
      "@id": "schema:BroadcastEvent"
    },
    "BroadcastFrequencySpecification": {
      "@id": "schema:BroadcastFrequencySpecification"
    },
    "BroadcastRelease": {
      "@id": "schema:BroadcastRelease"
    },
    "BroadcastService": {
      "@id": "schema:BroadcastService"
    },
    "BrokerageAccount": {
      "@id": "schema:BrokerageAccount"
    },
    "BuddhistTemple": {
      "@id": "schema:BuddhistTemple"
    },
    "BusOrCoach": {
      "@id": "schema:BusOrCoach"
    },
    "BusReservation": {
      "@id": "schema:BusReservation"
    },
    "BusStation": {
      "@id": "schema:BusStation"
    },
    "BusStop": {
      "@id": "schema:BusStop"
    },
    "BusTrip": {
      "@id": "schema:BusTrip"
    },
    "BusinessAudience": {
      "@id": "schema:BusinessAudience"
    },
    "BusinessEntityType": {
      "@id": "schema:BusinessEntityType"
    },
    "BusinessEvent": {
      "@id": "schema:BusinessEvent"
    },
    "BusinessFunction": {
      "@id": "schema:BusinessFunction"
    },
    "BuyAction": {
      "@id": "schema:BuyAction"
    },
    "CDFormat": {
      "@id": "schema:CDFormat"
    },
    "CT": {
      "@id": "schema:CT"
    },
    "CableOrSatelliteService": {
      "@id": "schema:CableOrSatelliteService"
    },
    "CafeOrCoffeeShop": {
      "@id": "schema:CafeOrCoffeeShop"
    },
    "Campground": {
      "@id": "schema:Campground"
    },
    "CampingPitch": {
      "@id": "schema:CampingPitch"
    },
    "Canal": {
      "@id": "schema:Canal"
    },
    "CancelAction": {
      "@id": "schema:CancelAction"
    },
    "Car": {
      "@id": "schema:Car"
    },
    "CarUsageType": {
      "@id": "schema:CarUsageType"
    },
    "Cardiovascular": {
      "@id": "schema:Cardiovascular"
    },
    "CardiovascularExam": {
      "@id": "schema:CardiovascularExam"
    },
    "CaseSeries": {
      "@id": "schema:CaseSeries"
    },
    "Casino": {
      "@id": "schema:Casino"
    },
    "CassetteFormat": {
      "@id": "schema:CassetteFormat"
    },
    "CategoryCode": {
      "@id": "schema:CategoryCode"
    },
    "CategoryCodeSet": {
      "@id": "schema:CategoryCodeSet"
    },
    "CatholicChurch": {
      "@id": "schema:CatholicChurch"
    },
    "Cemetery": {
      "@id": "schema:Cemetery"
    },
    "Chapter": {
      "@id": "schema:Chapter"
    },
    "CheckAction": {
      "@id": "schema:CheckAction"
    },
    "CheckInAction": {
      "@id": "schema:CheckInAction"
    },
    "CheckOutAction": {
      "@id": "schema:CheckOutAction"
    },
    "CheckoutPage": {
      "@id": "schema:CheckoutPage"
    },
    "ChildCare": {
      "@id": "schema:ChildCare"
    },
    "ChildrensEvent": {
      "@id": "schema:ChildrensEvent"
    },
    "Chiropractic": {
      "@id": "schema:Chiropractic"
    },
    "ChooseAction": {
      "@id": "schema:ChooseAction"
    },
    "Church": {
      "@id": "schema:Church"
    },
    "City": {
      "@id": "schema:City"
    },
    "CityHall": {
      "@id": "schema:CityHall"
    },
    "CivicStructure": {
      "@id": "schema:CivicStructure"
    },
    "ClaimReview": {
      "@id": "schema:ClaimReview"
    },
    "Class": {
      "@id": "schema:Class"
    },
    "Clinician": {
      "@id": "schema:Clinician"
    },
    "Clip": {
      "@id": "schema:Clip"
    },
    "ClothingStore": {
      "@id": "schema:ClothingStore"
    },
    "CoOp": {
      "@id": "schema:CoOp"
    },
    "Code": {
      "@id": "schema:Code"
    },
    "CohortStudy": {
      "@id": "schema:CohortStudy"
    },
    "Collection": {
      "@id": "schema:Collection"
    },
    "CollectionPage": {
      "@id": "schema:CollectionPage"
    },
    "CollegeOrUniversity": {
      "@id": "schema:CollegeOrUniversity"
    },
    "ComedyClub": {
      "@id": "schema:ComedyClub"
    },
    "ComedyEvent": {
      "@id": "schema:ComedyEvent"
    },
    "ComicCoverArt": {
      "@id": "schema:ComicCoverArt"
    },
    "ComicIssue": {
      "@id": "schema:ComicIssue"
    },
    "ComicSeries": {
      "@id": "schema:ComicSeries"
    },
    "ComicStory": {
      "@id": "schema:ComicStory"
    },
    "Comment": {
      "@id": "schema:Comment"
    },
    "CommentAction": {
      "@id": "schema:CommentAction"
    },
    "CommentPermission": {
      "@id": "schema:CommentPermission"
    },
    "CommunicateAction": {
      "@id": "schema:CommunicateAction"
    },
    "CommunityHealth": {
      "@id": "schema:CommunityHealth"
    },
    "CompilationAlbum": {
      "@id": "schema:CompilationAlbum"
    },
    "CompleteDataFeed": {
      "@id": "schema:CompleteDataFeed"
    },
    "Completed": {
      "@id": "schema:Completed"
    },
    "CompletedActionStatus": {
      "@id": "schema:CompletedActionStatus"
    },
    "CompoundPriceSpecification": {
      "@id": "schema:CompoundPriceSpecification"
    },
    "ComputerLanguage": {
      "@id": "schema:ComputerLanguage"
    },
    "ComputerStore": {
      "@id": "schema:ComputerStore"
    },
    "ConfirmAction": {
      "@id": "schema:ConfirmAction"
    },
    "Consortium": {
      "@id": "schema:Consortium"
    },
    "ConsumeAction": {
      "@id": "schema:ConsumeAction"
    },
    "ContactPage": {
      "@id": "schema:ContactPage"
    },
    "ContactPoint": {
      "@id": "schema:ContactPoint"
    },
    "ContactPointOption": {
      "@id": "schema:ContactPointOption"
    },
    "Continent": {
      "@id": "schema:Continent"
    },
    "ControlAction": {
      "@id": "schema:ControlAction"
    },
    "ConvenienceStore": {
      "@id": "schema:ConvenienceStore"
    },
    "Conversation": {
      "@id": "schema:Conversation"
    },
    "CookAction": {
      "@id": "schema:CookAction"
    },
    "Corporation": {
      "@id": "schema:Corporation"
    },
    "Country": {
      "@id": "schema:Country"
    },
    "Course": {
      "@id": "schema:Course"
    },
    "CourseInstance": {
      "@id": "schema:CourseInstance"
    },
    "Courthouse": {
      "@id": "schema:Courthouse"
    },
    "CoverArt": {
      "@id": "schema:CoverArt"
    },
    "CreateAction": {
      "@id": "schema:CreateAction"
    },
    "CreativeWork": {
      "@id": "schema:CreativeWork"
    },
    "CreativeWorkSeason": {
      "@id": "schema:CreativeWorkSeason"
    },
    "CreativeWorkSeries": {
      "@id": "schema:CreativeWorkSeries"
    },
    "CreditCard": {
      "@id": "schema:CreditCard"
    },
    "Crematorium": {
      "@id": "schema:Crematorium"
    },
    "CrossSectional": {
      "@id": "schema:CrossSectional"
    },
    "CurrencyConversionService": {
      "@id": "schema:CurrencyConversionService"
    },
    "DDxElement": {
      "@id": "schema:DDxElement"
    },
    "DJMixAlbum": {
      "@id": "schema:DJMixAlbum"
    },
    "DVDFormat": {
      "@id": "schema:DVDFormat"
    },
    "DamagedCondition": {
      "@id": "schema:DamagedCondition"
    },
    "DanceEvent": {
      "@id": "schema:DanceEvent"
    },
    "DanceGroup": {
      "@id": "schema:DanceGroup"
    },
    "DataCatalog": {
      "@id": "schema:DataCatalog"
    },
    "DataDownload": {
      "@id": "schema:DataDownload"
    },
    "DataFeed": {
      "@id": "schema:DataFeed"
    },
    "DataFeedItem": {
      "@id": "schema:DataFeedItem"
    },
    "DataType": {
      "@id": "schema:DataType"
    },
    "Dataset": {
      "@id": "schema:Dataset"
    },
    "Date": {
      "@id": "schema:Date"
    },
    "DateTime": {
      "@id": "schema:DateTime"
    },
    "DatedMoneySpecification": {
      "@id": "schema:DatedMoneySpecification"
    },
    "DayOfWeek": {
      "@id": "schema:DayOfWeek"
    },
    "DaySpa": {
      "@id": "schema:DaySpa"
    },
    "DeactivateAction": {
      "@id": "schema:DeactivateAction"
    },
    "DefenceEstablishment": {
      "@id": "schema:DefenceEstablishment"
    },
    "DeleteAction": {
      "@id": "schema:DeleteAction"
    },
    "DeliveryChargeSpecification": {
      "@id": "schema:DeliveryChargeSpecification"
    },
    "DeliveryEvent": {
      "@id": "schema:DeliveryEvent"
    },
    "DeliveryMethod": {
      "@id": "schema:DeliveryMethod"
    },
    "Demand": {
      "@id": "schema:Demand"
    },
    "DemoAlbum": {
      "@id": "schema:DemoAlbum"
    },
    "Dentist": {
      "@id": "schema:Dentist"
    },
    "Dentistry": {
      "@id": "schema:Dentistry"
    },
    "DepartAction": {
      "@id": "schema:DepartAction"
    },
    "DepartmentStore": {
      "@id": "schema:DepartmentStore"
    },
    "DepositAccount": {
      "@id": "schema:DepositAccount"
    },
    "Dermatologic": {
      "@id": "schema:Dermatologic"
    },
    "Dermatology": {
      "@id": "schema:Dermatology"
    },
    "DiabeticDiet": {
      "@id": "schema:DiabeticDiet"
    },
    "Diagnostic": {
      "@id": "schema:Diagnostic"
    },
    "DiagnosticLab": {
      "@id": "schema:DiagnosticLab"
    },
    "DiagnosticProcedure": {
      "@id": "schema:DiagnosticProcedure"
    },
    "Diet": {
      "@id": "schema:Diet"
    },
    "DietNutrition": {
      "@id": "schema:DietNutrition"
    },
    "DietarySupplement": {
      "@id": "schema:DietarySupplement"
    },
    "DigitalAudioTapeFormat": {
      "@id": "schema:DigitalAudioTapeFormat"
    },
    "DigitalDocument": {
      "@id": "schema:DigitalDocument"
    },
    "DigitalDocumentPermission": {
      "@id": "schema:DigitalDocumentPermission"
    },
    "DigitalDocumentPermissionType": {
      "@id": "schema:DigitalDocumentPermissionType"
    },
    "DigitalFormat": {
      "@id": "schema:DigitalFormat"
    },
    "DisagreeAction": {
      "@id": "schema:DisagreeAction"
    },
    "Discontinued": {
      "@id": "schema:Discontinued"
    },
    "DiscoverAction": {
      "@id": "schema:DiscoverAction"
    },
    "DiscussionForumPosting": {
      "@id": "schema:DiscussionForumPosting"
    },
    "DislikeAction": {
      "@id": "schema:DislikeAction"
    },
    "Distance": {
      "@id": "schema:Distance"
    },
    "Distillery": {
      "@id": "schema:Distillery"
    },
    "DonateAction": {
      "@id": "schema:DonateAction"
    },
    "DoseSchedule": {
      "@id": "schema:DoseSchedule"
    },
    "DoubleBlindedTrial": {
      "@id": "schema:DoubleBlindedTrial"
    },
    "DownloadAction": {
      "@id": "schema:DownloadAction"
    },
    "DrawAction": {
      "@id": "schema:DrawAction"
    },
    "DrinkAction": {
      "@id": "schema:DrinkAction"
    },
    "DriveWheelConfigurationValue": {
      "@id": "schema:DriveWheelConfigurationValue"
    },
    "DrivingSchoolVehicleUsage": {
      "@id": "schema:DrivingSchoolVehicleUsage"
    },
    "Drug": {
      "@id": "schema:Drug"
    },
    "DrugClass": {
      "@id": "schema:DrugClass"
    },
    "DrugCost": {
      "@id": "schema:DrugCost"
    },
    "DrugCostCategory": {
      "@id": "schema:DrugCostCategory"
    },
    "DrugLegalStatus": {
      "@id": "schema:DrugLegalStatus"
    },
    "DrugPregnancyCategory": {
      "@id": "schema:DrugPregnancyCategory"
    },
    "DrugPrescriptionStatus": {
      "@id": "schema:DrugPrescriptionStatus"
    },
    "DrugStrength": {
      "@id": "schema:DrugStrength"
    },
    "DryCleaningOrLaundry": {
      "@id": "schema:DryCleaningOrLaundry"
    },
    "Duration": {
      "@id": "schema:Duration"
    },
    "EBook": {
      "@id": "schema:EBook"
    },
    "EPRelease": {
      "@id": "schema:EPRelease"
    },
    "Ear": {
      "@id": "schema:Ear"
    },
    "EatAction": {
      "@id": "schema:EatAction"
    },
    "EducationEvent": {
      "@id": "schema:EducationEvent"
    },
    "EducationalAudience": {
      "@id": "schema:EducationalAudience"
    },
    "EducationalOrganization": {
      "@id": "schema:EducationalOrganization"
    },
    "Electrician": {
      "@id": "schema:Electrician"
    },
    "ElectronicsStore": {
      "@id": "schema:ElectronicsStore"
    },
    "ElementarySchool": {
      "@id": "schema:ElementarySchool"
    },
    "EmailMessage": {
      "@id": "schema:EmailMessage"
    },
    "Embassy": {
      "@id": "schema:Embassy"
    },
    "Emergency": {
      "@id": "schema:Emergency"
    },
    "EmergencyService": {
      "@id": "schema:EmergencyService"
    },
    "EmployeeRole": {
      "@id": "schema:EmployeeRole"
    },
    "EmploymentAgency": {
      "@id": "schema:EmploymentAgency"
    },
    "Endocrine": {
      "@id": "schema:Endocrine"
    },
    "EndorseAction": {
      "@id": "schema:EndorseAction"
    },
    "EndorsementRating": {
      "@id": "schema:EndorsementRating"
    },
    "Energy": {
      "@id": "schema:Energy"
    },
    "EngineSpecification": {
      "@id": "schema:EngineSpecification"
    },
    "EnrollingByInvitation": {
      "@id": "schema:EnrollingByInvitation"
    },
    "EntertainmentBusiness": {
      "@id": "schema:EntertainmentBusiness"
    },
    "EntryPoint": {
      "@id": "schema:EntryPoint"
    },
    "Enumeration": {
      "@id": "schema:Enumeration"
    },
    "Episode": {
      "@id": "schema:Episode"
    },
    "Event": {
      "@id": "schema:Event"
    },
    "EventCancelled": {
      "@id": "schema:EventCancelled"
    },
    "EventPostponed": {
      "@id": "schema:EventPostponed"
    },
    "EventRescheduled": {
      "@id": "schema:EventRescheduled"
    },
    "EventReservation": {
      "@id": "schema:EventReservation"
    },
    "EventScheduled": {
      "@id": "schema:EventScheduled"
    },
    "EventSeries": {
      "@id": "schema:EventSeries"
    },
    "EventStatusType": {
      "@id": "schema:EventStatusType"
    },
    "EventVenue": {
      "@id": "schema:EventVenue"
    },
    "EvidenceLevelA": {
      "@id": "schema:EvidenceLevelA"
    },
    "EvidenceLevelB": {
      "@id": "schema:EvidenceLevelB"
    },
    "EvidenceLevelC": {
      "@id": "schema:EvidenceLevelC"
    },
    "ExchangeRateSpecification": {
      "@id": "schema:ExchangeRateSpecification"
    },
    "ExerciseAction": {
      "@id": "schema:ExerciseAction"
    },
    "ExerciseGym": {
      "@id": "schema:ExerciseGym"
    },
    "ExercisePlan": {
      "@id": "schema:ExercisePlan"
    },
    "ExhibitionEvent": {
      "@id": "schema:ExhibitionEvent"
    },
    "Eye": {
      "@id": "schema:Eye"
    },
    "FDAcategoryA": {
      "@id": "schema:FDAcategoryA"
    },
    "FDAcategoryB": {
      "@id": "schema:FDAcategoryB"
    },
    "FDAcategoryC": {
      "@id": "schema:FDAcategoryC"
    },
    "FDAcategoryD": {
      "@id": "schema:FDAcategoryD"
    },
    "FDAcategoryX": {
      "@id": "schema:FDAcategoryX"
    },
    "FDAnotEvaluated": {
      "@id": "schema:FDAnotEvaluated"
    },
    "FMRadioChannel": {
      "@id": "schema:FMRadioChannel"
    },
    "FailedActionStatus": {
      "@id": "schema:FailedActionStatus"
    },
    "FastFoodRestaurant": {
      "@id": "schema:FastFoodRestaurant"
    },
    "Female": {
      "@id": "schema:Female"
    },
    "Festival": {
      "@id": "schema:Festival"
    },
    "FilmAction": {
      "@id": "schema:FilmAction"
    },
    "FinancialProduct": {
      "@id": "schema:FinancialProduct"
    },
    "FinancialService": {
      "@id": "schema:FinancialService"
    },
    "FindAction": {
      "@id": "schema:FindAction"
    },
    "FireStation": {
      "@id": "schema:FireStation"
    },
    "Flexibility": {
      "@id": "schema:Flexibility"
    },
    "Flight": {
      "@id": "schema:Flight"
    },
    "FlightReservation": {
      "@id": "schema:FlightReservation"
    },
    "Float": {
      "@id": "schema:Float"
    },
    "Florist": {
      "@id": "schema:Florist"
    },
    "FollowAction": {
      "@id": "schema:FollowAction"
    },
    "FoodEstablishment": {
      "@id": "schema:FoodEstablishment"
    },
    "FoodEstablishmentReservation": {
      "@id": "schema:FoodEstablishmentReservation"
    },
    "FoodEvent": {
      "@id": "schema:FoodEvent"
    },
    "FoodService": {
      "@id": "schema:FoodService"
    },
    "FourWheelDriveConfiguration": {
      "@id": "schema:FourWheelDriveConfiguration"
    },
    "Friday": {
      "@id": "schema:Friday"
    },
    "FrontWheelDriveConfiguration": {
      "@id": "schema:FrontWheelDriveConfiguration"
    },
    "Fungus": {
      "@id": "schema:Fungus"
    },
    "FurnitureStore": {
      "@id": "schema:FurnitureStore"
    },
    "Game": {
      "@id": "schema:Game"
    },
    "GamePlayMode": {
      "@id": "schema:GamePlayMode"
    },
    "GameServer": {
      "@id": "schema:GameServer"
    },
    "GameServerStatus": {
      "@id": "schema:GameServerStatus"
    },
    "GardenStore": {
      "@id": "schema:GardenStore"
    },
    "GasStation": {
      "@id": "schema:GasStation"
    },
    "Gastroenterologic": {
      "@id": "schema:Gastroenterologic"
    },
    "GatedResidenceCommunity": {
      "@id": "schema:GatedResidenceCommunity"
    },
    "GenderType": {
      "@id": "schema:GenderType"
    },
    "GeneralContractor": {
      "@id": "schema:GeneralContractor"
    },
    "Genetic": {
      "@id": "schema:Genetic"
    },
    "Genitourinary": {
      "@id": "schema:Genitourinary"
    },
    "GeoCircle": {
      "@id": "schema:GeoCircle"
    },
    "GeoCoordinates": {
      "@id": "schema:GeoCoordinates"
    },
    "GeoShape": {
      "@id": "schema:GeoShape"
    },
    "GeospatialGeometry": {
      "@id": "schema:GeospatialGeometry"
    },
    "Geriatric": {
      "@id": "schema:Geriatric"
    },
    "GiveAction": {
      "@id": "schema:GiveAction"
    },
    "GlutenFreeDiet": {
      "@id": "schema:GlutenFreeDiet"
    },
    "GolfCourse": {
      "@id": "schema:GolfCourse"
    },
    "GovernmentBuilding": {
      "@id": "schema:GovernmentBuilding"
    },
    "GovernmentOffice": {
      "@id": "schema:GovernmentOffice"
    },
    "GovernmentOrganization": {
      "@id": "schema:GovernmentOrganization"
    },
    "GovernmentPermit": {
      "@id": "schema:GovernmentPermit"
    },
    "GovernmentService": {
      "@id": "schema:GovernmentService"
    },
    "GraphicNovel": {
      "@id": "schema:GraphicNovel"
    },
    "GroceryStore": {
      "@id": "schema:GroceryStore"
    },
    "GroupBoardingPolicy": {
      "@id": "schema:GroupBoardingPolicy"
    },
    "Gynecologic": {
      "@id": "schema:Gynecologic"
    },
    "HVACBusiness": {
      "@id": "schema:HVACBusiness"
    },
    "HairSalon": {
      "@id": "schema:HairSalon"
    },
    "HalalDiet": {
      "@id": "schema:HalalDiet"
    },
    "Hardcover": {
      "@id": "schema:Hardcover"
    },
    "HardwareStore": {
      "@id": "schema:HardwareStore"
    },
    "Head": {
      "@id": "schema:Head"
    },
    "HealthAndBeautyBusiness": {
      "@id": "schema:HealthAndBeautyBusiness"
    },
    "HealthClub": {
      "@id": "schema:HealthClub"
    },
    "HealthInsurancePlan": {
      "@id": "schema:HealthInsurancePlan"
    },
    "HealthPlanCostSharingSpecification": {
      "@id": "schema:HealthPlanCostSharingSpecification"
    },
    "HealthPlanFormulary": {
      "@id": "schema:HealthPlanFormulary"
    },
    "HealthPlanNetwork": {
      "@id": "schema:HealthPlanNetwork"
    },
    "HearingImpairedSupported": {
      "@id": "schema:HearingImpairedSupported"
    },
    "Hematologic": {
      "@id": "schema:Hematologic"
    },
    "HighSchool": {
      "@id": "schema:HighSchool"
    },
    "HinduDiet": {
      "@id": "schema:HinduDiet"
    },
    "HinduTemple": {
      "@id": "schema:HinduTemple"
    },
    "HobbyShop": {
      "@id": "schema:HobbyShop"
    },
    "HomeAndConstructionBusiness": {
      "@id": "schema:HomeAndConstructionBusiness"
    },
    "HomeGoodsStore": {
      "@id": "schema:HomeGoodsStore"
    },
    "Homeopathic": {
      "@id": "schema:Homeopathic"
    },
    "Hospital": {
      "@id": "schema:Hospital"
    },
    "Hostel": {
      "@id": "schema:Hostel"
    },
    "Hotel": {
      "@id": "schema:Hotel"
    },
    "HotelRoom": {
      "@id": "schema:HotelRoom"
    },
    "House": {
      "@id": "schema:House"
    },
    "HousePainter": {
      "@id": "schema:HousePainter"
    },
    "IceCreamShop": {
      "@id": "schema:IceCreamShop"
    },
    "IgnoreAction": {
      "@id": "schema:IgnoreAction"
    },
    "ImageGallery": {
      "@id": "schema:ImageGallery"
    },
    "ImageObject": {
      "@id": "schema:ImageObject"
    },
    "ImagingTest": {
      "@id": "schema:ImagingTest"
    },
    "InStock": {
      "@id": "schema:InStock"
    },
    "InStoreOnly": {
      "@id": "schema:InStoreOnly"
    },
    "IndividualProduct": {
      "@id": "schema:IndividualProduct"
    },
    "Infectious": {
      "@id": "schema:Infectious"
    },
    "InfectiousAgentClass": {
      "@id": "schema:InfectiousAgentClass"
    },
    "InfectiousDisease": {
      "@id": "schema:InfectiousDisease"
    },
    "InformAction": {
      "@id": "schema:InformAction"
    },
    "InsertAction": {
      "@id": "schema:InsertAction"
    },
    "InstallAction": {
      "@id": "schema:InstallAction"
    },
    "InsuranceAgency": {
      "@id": "schema:InsuranceAgency"
    },
    "Intangible": {
      "@id": "schema:Intangible"
    },
    "Integer": {
      "@id": "schema:Integer"
    },
    "InteractAction": {
      "@id": "schema:InteractAction"
    },
    "InteractionCounter": {
      "@id": "schema:InteractionCounter"
    },
    "InternationalTrial": {
      "@id": "schema:InternationalTrial"
    },
    "InternetCafe": {
      "@id": "schema:InternetCafe"
    },
    "InvestmentFund": {
      "@id": "schema:InvestmentFund"
    },
    "InvestmentOrDeposit": {
      "@id": "schema:InvestmentOrDeposit"
    },
    "InviteAction": {
      "@id": "schema:InviteAction"
    },
    "Invoice": {
      "@id": "schema:Invoice"
    },
    "ItemAvailability": {
      "@id": "schema:ItemAvailability"
    },
    "ItemList": {
      "@id": "schema:ItemList"
    },
    "ItemListOrderAscending": {
      "@id": "schema:ItemListOrderAscending"
    },
    "ItemListOrderDescending": {
      "@id": "schema:ItemListOrderDescending"
    },
    "ItemListOrderType": {
      "@id": "schema:ItemListOrderType"
    },
    "ItemListUnordered": {
      "@id": "schema:ItemListUnordered"
    },
    "ItemPage": {
      "@id": "schema:ItemPage"
    },
    "JewelryStore": {
      "@id": "schema:JewelryStore"
    },
    "JobPosting": {
      "@id": "schema:JobPosting"
    },
    "JoinAction": {
      "@id": "schema:JoinAction"
    },
    "Joint": {
      "@id": "schema:Joint"
    },
    "KosherDiet": {
      "@id": "schema:KosherDiet"
    },
    "LaboratoryScience": {
      "@id": "schema:LaboratoryScience"
    },
    "LakeBodyOfWater": {
      "@id": "schema:LakeBodyOfWater"
    },
    "Landform": {
      "@id": "schema:Landform"
    },
    "LandmarksOrHistoricalBuildings": {
      "@id": "schema:LandmarksOrHistoricalBuildings"
    },
    "Language": {
      "@id": "schema:Language"
    },
    "LaserDiscFormat": {
      "@id": "schema:LaserDiscFormat"
    },
    "LeaveAction": {
      "@id": "schema:LeaveAction"
    },
    "LeftHandDriving": {
      "@id": "schema:LeftHandDriving"
    },
    "LegalService": {
      "@id": "schema:LegalService"
    },
    "LegislativeBuilding": {
      "@id": "schema:LegislativeBuilding"
    },
    "LeisureTimeActivity": {
      "@id": "schema:LeisureTimeActivity"
    },
    "LendAction": {
      "@id": "schema:LendAction"
    },
    "Library": {
      "@id": "schema:Library"
    },
    "LibrarySystem": {
      "@id": "schema:LibrarySystem"
    },
    "LifestyleModification": {
      "@id": "schema:LifestyleModification"
    },
    "Ligament": {
      "@id": "schema:Ligament"
    },
    "LikeAction": {
      "@id": "schema:LikeAction"
    },
    "LimitedAvailability": {
      "@id": "schema:LimitedAvailability"
    },
    "LinkRole": {
      "@id": "schema:LinkRole"
    },
    "LiquorStore": {
      "@id": "schema:LiquorStore"
    },
    "ListenAction": {
      "@id": "schema:ListenAction"
    },
    "LiteraryEvent": {
      "@id": "schema:LiteraryEvent"
    },
    "LiveAlbum": {
      "@id": "schema:LiveAlbum"
    },
    "LiveBlogPosting": {
      "@id": "schema:LiveBlogPosting"
    },
    "LoanOrCredit": {
      "@id": "schema:LoanOrCredit"
    },
    "LocalBusiness": {
      "@id": "schema:LocalBusiness"
    },
    "LocationFeatureSpecification": {
      "@id": "schema:LocationFeatureSpecification"
    },
    "LockerDelivery": {
      "@id": "schema:LockerDelivery"
    },
    "Locksmith": {
      "@id": "schema:Locksmith"
    },
    "LodgingBusiness": {
      "@id": "schema:LodgingBusiness"
    },
    "LodgingReservation": {
      "@id": "schema:LodgingReservation"
    },
    "Longitudinal": {
      "@id": "schema:Longitudinal"
    },
    "LoseAction": {
      "@id": "schema:LoseAction"
    },
    "LowCalorieDiet": {
      "@id": "schema:LowCalorieDiet"
    },
    "LowFatDiet": {
      "@id": "schema:LowFatDiet"
    },
    "LowLactoseDiet": {
      "@id": "schema:LowLactoseDiet"
    },
    "LowSaltDiet": {
      "@id": "schema:LowSaltDiet"
    },
    "Lung": {
      "@id": "schema:Lung"
    },
    "LymphaticVessel": {
      "@id": "schema:LymphaticVessel"
    },
    "MRI": {
      "@id": "schema:MRI"
    },
    "Male": {
      "@id": "schema:Male"
    },
    "Map": {
      "@id": "schema:Map"
    },
    "MapCategoryType": {
      "@id": "schema:MapCategoryType"
    },
    "MarryAction": {
      "@id": "schema:MarryAction"
    },
    "Mass": {
      "@id": "schema:Mass"
    },
    "MaximumDoseSchedule": {
      "@id": "schema:MaximumDoseSchedule"
    },
    "MediaObject": {
      "@id": "schema:MediaObject"
    },
    "MedicalAudience": {
      "@id": "schema:MedicalAudience"
    },
    "MedicalBusiness": {
      "@id": "schema:MedicalBusiness"
    },
    "MedicalCause": {
      "@id": "schema:MedicalCause"
    },
    "MedicalClinic": {
      "@id": "schema:MedicalClinic"
    },
    "MedicalCode": {
      "@id": "schema:MedicalCode"
    },
    "MedicalCondition": {
      "@id": "schema:MedicalCondition"
    },
    "MedicalConditionStage": {
      "@id": "schema:MedicalConditionStage"
    },
    "MedicalContraindication": {
      "@id": "schema:MedicalContraindication"
    },
    "MedicalDevice": {
      "@id": "schema:MedicalDevice"
    },
    "MedicalDevicePurpose": {
      "@id": "schema:MedicalDevicePurpose"
    },
    "MedicalEntity": {
      "@id": "schema:MedicalEntity"
    },
    "MedicalEnumeration": {
      "@id": "schema:MedicalEnumeration"
    },
    "MedicalEvidenceLevel": {
      "@id": "schema:MedicalEvidenceLevel"
    },
    "MedicalGuideline": {
      "@id": "schema:MedicalGuideline"
    },
    "MedicalGuidelineContraindication": {
      "@id": "schema:MedicalGuidelineContraindication"
    },
    "MedicalGuidelineRecommendation": {
      "@id": "schema:MedicalGuidelineRecommendation"
    },
    "MedicalImagingTechnique": {
      "@id": "schema:MedicalImagingTechnique"
    },
    "MedicalIndication": {
      "@id": "schema:MedicalIndication"
    },
    "MedicalIntangible": {
      "@id": "schema:MedicalIntangible"
    },
    "MedicalObservationalStudy": {
      "@id": "schema:MedicalObservationalStudy"
    },
    "MedicalObservationalStudyDesign": {
      "@id": "schema:MedicalObservationalStudyDesign"
    },
    "MedicalOrganization": {
      "@id": "schema:MedicalOrganization"
    },
    "MedicalProcedure": {
      "@id": "schema:MedicalProcedure"
    },
    "MedicalProcedureType": {
      "@id": "schema:MedicalProcedureType"
    },
    "MedicalResearcher": {
      "@id": "schema:MedicalResearcher"
    },
    "MedicalRiskCalculator": {
      "@id": "schema:MedicalRiskCalculator"
    },
    "MedicalRiskEstimator": {
      "@id": "schema:MedicalRiskEstimator"
    },
    "MedicalRiskFactor": {
      "@id": "schema:MedicalRiskFactor"
    },
    "MedicalRiskScore": {
      "@id": "schema:MedicalRiskScore"
    },
    "MedicalScholarlyArticle": {
      "@id": "schema:MedicalScholarlyArticle"
    },
    "MedicalSign": {
      "@id": "schema:MedicalSign"
    },
    "MedicalSignOrSymptom": {
      "@id": "schema:MedicalSignOrSymptom"
    },
    "MedicalSpecialty": {
      "@id": "schema:MedicalSpecialty"
    },
    "MedicalStudy": {
      "@id": "schema:MedicalStudy"
    },
    "MedicalStudyStatus": {
      "@id": "schema:MedicalStudyStatus"
    },
    "MedicalSymptom": {
      "@id": "schema:MedicalSymptom"
    },
    "MedicalTest": {
      "@id": "schema:MedicalTest"
    },
    "MedicalTestPanel": {
      "@id": "schema:MedicalTestPanel"
    },
    "MedicalTherapy": {
      "@id": "schema:MedicalTherapy"
    },
    "MedicalTrial": {
      "@id": "schema:MedicalTrial"
    },
    "MedicalTrialDesign": {
      "@id": "schema:MedicalTrialDesign"
    },
    "MedicalWebPage": {
      "@id": "schema:MedicalWebPage"
    },
    "MedicineSystem": {
      "@id": "schema:MedicineSystem"
    },
    "MeetingRoom": {
      "@id": "schema:MeetingRoom"
    },
    "MensClothingStore": {
      "@id": "schema:MensClothingStore"
    },
    "Menu": {
      "@id": "schema:Menu"
    },
    "MenuItem": {
      "@id": "schema:MenuItem"
    },
    "MenuSection": {
      "@id": "schema:MenuSection"
    },
    "Message": {
      "@id": "schema:Message"
    },
    "MiddleSchool": {
      "@id": "schema:MiddleSchool"
    },
    "Midwifery": {
      "@id": "schema:Midwifery"
    },
    "MixtapeAlbum": {
      "@id": "schema:MixtapeAlbum"
    },
    "MobileApplication": {
      "@id": "schema:MobileApplication"
    },
    "MobilePhoneStore": {
      "@id": "schema:MobilePhoneStore"
    },
    "Monday": {
      "@id": "schema:Monday"
    },
    "MonetaryAmount": {
      "@id": "schema:MonetaryAmount"
    },
    "MoneyTransfer": {
      "@id": "schema:MoneyTransfer"
    },
    "MortgageLoan": {
      "@id": "schema:MortgageLoan"
    },
    "Mosque": {
      "@id": "schema:Mosque"
    },
    "Motel": {
      "@id": "schema:Motel"
    },
    "Motorcycle": {
      "@id": "schema:Motorcycle"
    },
    "MotorcycleDealer": {
      "@id": "schema:MotorcycleDealer"
    },
    "MotorcycleRepair": {
      "@id": "schema:MotorcycleRepair"
    },
    "MotorizedBicycle": {
      "@id": "schema:MotorizedBicycle"
    },
    "Mountain": {
      "@id": "schema:Mountain"
    },
    "MoveAction": {
      "@id": "schema:MoveAction"
    },
    "Movie": {
      "@id": "schema:Movie"
    },
    "MovieClip": {
      "@id": "schema:MovieClip"
    },
    "MovieRentalStore": {
      "@id": "schema:MovieRentalStore"
    },
    "MovieSeries": {
      "@id": "schema:MovieSeries"
    },
    "MovieTheater": {
      "@id": "schema:MovieTheater"
    },
    "MovingCompany": {
      "@id": "schema:MovingCompany"
    },
    "MultiCenterTrial": {
      "@id": "schema:MultiCenterTrial"
    },
    "MultiPlayer": {
      "@id": "schema:MultiPlayer"
    },
    "MulticellularParasite": {
      "@id": "schema:MulticellularParasite"
    },
    "Muscle": {
      "@id": "schema:Muscle"
    },
    "Musculoskeletal": {
      "@id": "schema:Musculoskeletal"
    },
    "MusculoskeletalExam": {
      "@id": "schema:MusculoskeletalExam"
    },
    "Museum": {
      "@id": "schema:Museum"
    },
    "MusicAlbum": {
      "@id": "schema:MusicAlbum"
    },
    "MusicAlbumProductionType": {
      "@id": "schema:MusicAlbumProductionType"
    },
    "MusicAlbumReleaseType": {
      "@id": "schema:MusicAlbumReleaseType"
    },
    "MusicComposition": {
      "@id": "schema:MusicComposition"
    },
    "MusicEvent": {
      "@id": "schema:MusicEvent"
    },
    "MusicGroup": {
      "@id": "schema:MusicGroup"
    },
    "MusicPlaylist": {
      "@id": "schema:MusicPlaylist"
    },
    "MusicRecording": {
      "@id": "schema:MusicRecording"
    },
    "MusicRelease": {
      "@id": "schema:MusicRelease"
    },
    "MusicReleaseFormatType": {
      "@id": "schema:MusicReleaseFormatType"
    },
    "MusicStore": {
      "@id": "schema:MusicStore"
    },
    "MusicVenue": {
      "@id": "schema:MusicVenue"
    },
    "MusicVideoObject": {
      "@id": "schema:MusicVideoObject"
    },
    "NGO": {
      "@id": "schema:NGO"
    },
    "NailSalon": {
      "@id": "schema:NailSalon"
    },
    "Neck": {
      "@id": "schema:Neck"
    },
    "Nerve": {
      "@id": "schema:Nerve"
    },
    "Neuro": {
      "@id": "schema:Neuro"
    },
    "Neurologic": {
      "@id": "schema:Neurologic"
    },
    "NewsArticle": {
      "@id": "schema:NewsArticle"
    },
    "Newspaper": {
      "@id": "schema:Newspaper"
    },
    "NightClub": {
      "@id": "schema:NightClub"
    },
    "NoninvasiveProcedure": {
      "@id": "schema:NoninvasiveProcedure"
    },
    "Nose": {
      "@id": "schema:Nose"
    },
    "NotYetRecruiting": {
      "@id": "schema:NotYetRecruiting"
    },
    "Notary": {
      "@id": "schema:Notary"
    },
    "NoteDigitalDocument": {
      "@id": "schema:NoteDigitalDocument"
    },
    "Number": {
      "@id": "schema:Number"
    },
    "Nursing": {
      "@id": "schema:Nursing"
    },
    "NutritionInformation": {
      "@id": "schema:NutritionInformation"
    },
    "OTC": {
      "@id": "schema:OTC"
    },
    "Observational": {
      "@id": "schema:Observational"
    },
    "Obstetric": {
      "@id": "schema:Obstetric"
    },
    "OccupationalActivity": {
      "@id": "schema:OccupationalActivity"
    },
    "OccupationalTherapy": {
      "@id": "schema:OccupationalTherapy"
    },
    "OceanBodyOfWater": {
      "@id": "schema:OceanBodyOfWater"
    },
    "Offer": {
      "@id": "schema:Offer"
    },
    "OfferCatalog": {
      "@id": "schema:OfferCatalog"
    },
    "OfferItemCondition": {
      "@id": "schema:OfferItemCondition"
    },
    "OfficeEquipmentStore": {
      "@id": "schema:OfficeEquipmentStore"
    },
    "OfflinePermanently": {
      "@id": "schema:OfflinePermanently"
    },
    "OfflineTemporarily": {
      "@id": "schema:OfflineTemporarily"
    },
    "OnDemandEvent": {
      "@id": "schema:OnDemandEvent"
    },
    "OnSitePickup": {
      "@id": "schema:OnSitePickup"
    },
    "Oncologic": {
      "@id": "schema:Oncologic"
    },
    "Online": {
      "@id": "schema:Online"
    },
    "OnlineFull": {
      "@id": "schema:OnlineFull"
    },
    "OnlineOnly": {
      "@id": "schema:OnlineOnly"
    },
    "OpenTrial": {
      "@id": "schema:OpenTrial"
    },
    "OpeningHoursSpecification": {
      "@id": "schema:OpeningHoursSpecification"
    },
    "Optician": {
      "@id": "schema:Optician"
    },
    "Optometric": {
      "@id": "schema:Optometric"
    },
    "Order": {
      "@id": "schema:Order"
    },
    "OrderAction": {
      "@id": "schema:OrderAction"
    },
    "OrderCancelled": {
      "@id": "schema:OrderCancelled"
    },
    "OrderDelivered": {
      "@id": "schema:OrderDelivered"
    },
    "OrderInTransit": {
      "@id": "schema:OrderInTransit"
    },
    "OrderItem": {
      "@id": "schema:OrderItem"
    },
    "OrderPaymentDue": {
      "@id": "schema:OrderPaymentDue"
    },
    "OrderPickupAvailable": {
      "@id": "schema:OrderPickupAvailable"
    },
    "OrderProblem": {
      "@id": "schema:OrderProblem"
    },
    "OrderProcessing": {
      "@id": "schema:OrderProcessing"
    },
    "OrderReturned": {
      "@id": "schema:OrderReturned"
    },
    "OrderStatus": {
      "@id": "schema:OrderStatus"
    },
    "Organization": {
      "@id": "schema:Organization"
    },
    "OrganizationRole": {
      "@id": "schema:OrganizationRole"
    },
    "OrganizeAction": {
      "@id": "schema:OrganizeAction"
    },
    "Osteopathic": {
      "@id": "schema:Osteopathic"
    },
    "Otolaryngologic": {
      "@id": "schema:Otolaryngologic"
    },
    "OutOfStock": {
      "@id": "schema:OutOfStock"
    },
    "OutletStore": {
      "@id": "schema:OutletStore"
    },
    "OwnershipInfo": {
      "@id": "schema:OwnershipInfo"
    },
    "PET": {
      "@id": "schema:PET"
    },
    "PaintAction": {
      "@id": "schema:PaintAction"
    },
    "Painting": {
      "@id": "schema:Painting"
    },
    "PalliativeProcedure": {
      "@id": "schema:PalliativeProcedure"
    },
    "Paperback": {
      "@id": "schema:Paperback"
    },
    "ParcelDelivery": {
      "@id": "schema:ParcelDelivery"
    },
    "ParcelService": {
      "@id": "schema:ParcelService"
    },
    "ParentAudience": {
      "@id": "schema:ParentAudience"
    },
    "Park": {
      "@id": "schema:Park"
    },
    "ParkingFacility": {
      "@id": "schema:ParkingFacility"
    },
    "ParkingMap": {
      "@id": "schema:ParkingMap"
    },
    "Pathology": {
      "@id": "schema:Pathology"
    },
    "PathologyTest": {
      "@id": "schema:PathologyTest"
    },
    "Patient": {
      "@id": "schema:Patient"
    },
    "PawnShop": {
      "@id": "schema:PawnShop"
    },
    "PayAction": {
      "@id": "schema:PayAction"
    },
    "PaymentAutomaticallyApplied": {
      "@id": "schema:PaymentAutomaticallyApplied"
    },
    "PaymentCard": {
      "@id": "schema:PaymentCard"
    },
    "PaymentChargeSpecification": {
      "@id": "schema:PaymentChargeSpecification"
    },
    "PaymentComplete": {
      "@id": "schema:PaymentComplete"
    },
    "PaymentDeclined": {
      "@id": "schema:PaymentDeclined"
    },
    "PaymentDue": {
      "@id": "schema:PaymentDue"
    },
    "PaymentMethod": {
      "@id": "schema:PaymentMethod"
    },
    "PaymentPastDue": {
      "@id": "schema:PaymentPastDue"
    },
    "PaymentService": {
      "@id": "schema:PaymentService"
    },
    "PaymentStatusType": {
      "@id": "schema:PaymentStatusType"
    },
    "Pediatric": {
      "@id": "schema:Pediatric"
    },
    "PeopleAudience": {
      "@id": "schema:PeopleAudience"
    },
    "PercutaneousProcedure": {
      "@id": "schema:PercutaneousProcedure"
    },
    "PerformAction": {
      "@id": "schema:PerformAction"
    },
    "PerformanceRole": {
      "@id": "schema:PerformanceRole"
    },
    "PerformingArtsTheater": {
      "@id": "schema:PerformingArtsTheater"
    },
    "PerformingGroup": {
      "@id": "schema:PerformingGroup"
    },
    "Periodical": {
      "@id": "schema:Periodical"
    },
    "Permit": {
      "@id": "schema:Permit"
    },
    "Person": {
      "@id": "schema:Person"
    },
    "PetStore": {
      "@id": "schema:PetStore"
    },
    "Pharmacy": {
      "@id": "schema:Pharmacy"
    },
    "PharmacySpecialty": {
      "@id": "schema:PharmacySpecialty"
    },
    "Photograph": {
      "@id": "schema:Photograph"
    },
    "PhotographAction": {
      "@id": "schema:PhotographAction"
    },
    "PhysicalActivity": {
      "@id": "schema:PhysicalActivity"
    },
    "PhysicalActivityCategory": {
      "@id": "schema:PhysicalActivityCategory"
    },
    "PhysicalExam": {
      "@id": "schema:PhysicalExam"
    },
    "PhysicalTherapy": {
      "@id": "schema:PhysicalTherapy"
    },
    "Physician": {
      "@id": "schema:Physician"
    },
    "Physiotherapy": {
      "@id": "schema:Physiotherapy"
    },
    "Place": {
      "@id": "schema:Place"
    },
    "PlaceOfWorship": {
      "@id": "schema:PlaceOfWorship"
    },
    "PlaceboControlledTrial": {
      "@id": "schema:PlaceboControlledTrial"
    },
    "PlanAction": {
      "@id": "schema:PlanAction"
    },
    "PlasticSurgery": {
      "@id": "schema:PlasticSurgery"
    },
    "PlayAction": {
      "@id": "schema:PlayAction"
    },
    "Playground": {
      "@id": "schema:Playground"
    },
    "Plumber": {
      "@id": "schema:Plumber"
    },
    "Podiatric": {
      "@id": "schema:Podiatric"
    },
    "PoliceStation": {
      "@id": "schema:PoliceStation"
    },
    "Pond": {
      "@id": "schema:Pond"
    },
    "PostOffice": {
      "@id": "schema:PostOffice"
    },
    "PostalAddress": {
      "@id": "schema:PostalAddress"
    },
    "PotentialActionStatus": {
      "@id": "schema:PotentialActionStatus"
    },
    "PreOrder": {
      "@id": "schema:PreOrder"
    },
    "PreOrderAction": {
      "@id": "schema:PreOrderAction"
    },
    "PreSale": {
      "@id": "schema:PreSale"
    },
    "PrependAction": {
      "@id": "schema:PrependAction"
    },
    "Preschool": {
      "@id": "schema:Preschool"
    },
    "PrescriptionOnly": {
      "@id": "schema:PrescriptionOnly"
    },
    "PresentationDigitalDocument": {
      "@id": "schema:PresentationDigitalDocument"
    },
    "PreventionIndication": {
      "@id": "schema:PreventionIndication"
    },
    "PriceSpecification": {
      "@id": "schema:PriceSpecification"
    },
    "PrimaryCare": {
      "@id": "schema:PrimaryCare"
    },
    "Prion": {
      "@id": "schema:Prion"
    },
    "Product": {
      "@id": "schema:Product"
    },
    "ProductModel": {
      "@id": "schema:ProductModel"
    },
    "ProfessionalService": {
      "@id": "schema:ProfessionalService"
    },
    "ProfilePage": {
      "@id": "schema:ProfilePage"
    },
    "ProgramMembership": {
      "@id": "schema:ProgramMembership"
    },
    "Property": {
      "@id": "schema:Property"
    },
    "PropertyValue": {
      "@id": "schema:PropertyValue"
    },
    "PropertyValueSpecification": {
      "@id": "schema:PropertyValueSpecification"
    },
    "Protozoa": {
      "@id": "schema:Protozoa"
    },
    "Psychiatric": {
      "@id": "schema:Psychiatric"
    },
    "PsychologicalTreatment": {
      "@id": "schema:PsychologicalTreatment"
    },
    "PublicHealth": {
      "@id": "schema:PublicHealth"
    },
    "PublicHolidays": {
      "@id": "schema:PublicHolidays"
    },
    "PublicSwimmingPool": {
      "@id": "schema:PublicSwimmingPool"
    },
    "PublicationEvent": {
      "@id": "schema:PublicationEvent"
    },
    "PublicationIssue": {
      "@id": "schema:PublicationIssue"
    },
    "PublicationVolume": {
      "@id": "schema:PublicationVolume"
    },
    "Pulmonary": {
      "@id": "schema:Pulmonary"
    },
    "QAPage": {
      "@id": "schema:QAPage"
    },
    "QualitativeValue": {
      "@id": "schema:QualitativeValue"
    },
    "QuantitativeValue": {
      "@id": "schema:QuantitativeValue"
    },
    "Quantity": {
      "@id": "schema:Quantity"
    },
    "Question": {
      "@id": "schema:Question"
    },
    "Quotation": {
      "@id": "schema:Quotation"
    },
    "QuoteAction": {
      "@id": "schema:QuoteAction"
    },
    "RVPark": {
      "@id": "schema:RVPark"
    },
    "RadiationTherapy": {
      "@id": "schema:RadiationTherapy"
    },
    "RadioChannel": {
      "@id": "schema:RadioChannel"
    },
    "RadioClip": {
      "@id": "schema:RadioClip"
    },
    "RadioEpisode": {
      "@id": "schema:RadioEpisode"
    },
    "RadioSeason": {
      "@id": "schema:RadioSeason"
    },
    "RadioSeries": {
      "@id": "schema:RadioSeries"
    },
    "RadioStation": {
      "@id": "schema:RadioStation"
    },
    "Radiography": {
      "@id": "schema:Radiography"
    },
    "RandomizedTrial": {
      "@id": "schema:RandomizedTrial"
    },
    "Rating": {
      "@id": "schema:Rating"
    },
    "ReactAction": {
      "@id": "schema:ReactAction"
    },
    "ReadAction": {
      "@id": "schema:ReadAction"
    },
    "ReadPermission": {
      "@id": "schema:ReadPermission"
    },
    "RealEstateAgent": {
      "@id": "schema:RealEstateAgent"
    },
    "RearWheelDriveConfiguration": {
      "@id": "schema:RearWheelDriveConfiguration"
    },
    "ReceiveAction": {
      "@id": "schema:ReceiveAction"
    },
    "Recipe": {
      "@id": "schema:Recipe"
    },
    "RecommendedDoseSchedule": {
      "@id": "schema:RecommendedDoseSchedule"
    },
    "Recruiting": {
      "@id": "schema:Recruiting"
    },
    "RecyclingCenter": {
      "@id": "schema:RecyclingCenter"
    },
    "RefurbishedCondition": {
      "@id": "schema:RefurbishedCondition"
    },
    "RegisterAction": {
      "@id": "schema:RegisterAction"
    },
    "Registry": {
      "@id": "schema:Registry"
    },
    "ReimbursementCap": {
      "@id": "schema:ReimbursementCap"
    },
    "RejectAction": {
      "@id": "schema:RejectAction"
    },
    "RemixAlbum": {
      "@id": "schema:RemixAlbum"
    },
    "Renal": {
      "@id": "schema:Renal"
    },
    "RentAction": {
      "@id": "schema:RentAction"
    },
    "RentalCarReservation": {
      "@id": "schema:RentalCarReservation"
    },
    "RentalVehicleUsage": {
      "@id": "schema:RentalVehicleUsage"
    },
    "RepaymentSpecification": {
      "@id": "schema:RepaymentSpecification"
    },
    "ReplaceAction": {
      "@id": "schema:ReplaceAction"
    },
    "ReplyAction": {
      "@id": "schema:ReplyAction"
    },
    "Report": {
      "@id": "schema:Report"
    },
    "ReportedDoseSchedule": {
      "@id": "schema:ReportedDoseSchedule"
    },
    "Reservation": {
      "@id": "schema:Reservation"
    },
    "ReservationCancelled": {
      "@id": "schema:ReservationCancelled"
    },
    "ReservationConfirmed": {
      "@id": "schema:ReservationConfirmed"
    },
    "ReservationHold": {
      "@id": "schema:ReservationHold"
    },
    "ReservationPackage": {
      "@id": "schema:ReservationPackage"
    },
    "ReservationPending": {
      "@id": "schema:ReservationPending"
    },
    "ReservationStatusType": {
      "@id": "schema:ReservationStatusType"
    },
    "ReserveAction": {
      "@id": "schema:ReserveAction"
    },
    "Reservoir": {
      "@id": "schema:Reservoir"
    },
    "Residence": {
      "@id": "schema:Residence"
    },
    "Resort": {
      "@id": "schema:Resort"
    },
    "RespiratoryTherapy": {
      "@id": "schema:RespiratoryTherapy"
    },
    "Restaurant": {
      "@id": "schema:Restaurant"
    },
    "RestrictedDiet": {
      "@id": "schema:RestrictedDiet"
    },
    "ResultsAvailable": {
      "@id": "schema:ResultsAvailable"
    },
    "ResultsNotAvailable": {
      "@id": "schema:ResultsNotAvailable"
    },
    "ResumeAction": {
      "@id": "schema:ResumeAction"
    },
    "Retail": {
      "@id": "schema:Retail"
    },
    "ReturnAction": {
      "@id": "schema:ReturnAction"
    },
    "Review": {
      "@id": "schema:Review"
    },
    "ReviewAction": {
      "@id": "schema:ReviewAction"
    },
    "Rheumatologic": {
      "@id": "schema:Rheumatologic"
    },
    "RightHandDriving": {
      "@id": "schema:RightHandDriving"
    },
    "RiverBodyOfWater": {
      "@id": "schema:RiverBodyOfWater"
    },
    "Role": {
      "@id": "schema:Role"
    },
    "RoofingContractor": {
      "@id": "schema:RoofingContractor"
    },
    "Room": {
      "@id": "schema:Room"
    },
    "RsvpAction": {
      "@id": "schema:RsvpAction"
    },
    "RsvpResponseMaybe": {
      "@id": "schema:RsvpResponseMaybe"
    },
    "RsvpResponseNo": {
      "@id": "schema:RsvpResponseNo"
    },
    "RsvpResponseType": {
      "@id": "schema:RsvpResponseType"
    },
    "RsvpResponseYes": {
      "@id": "schema:RsvpResponseYes"
    },
    "SaleEvent": {
      "@id": "schema:SaleEvent"
    },
    "Saturday": {
      "@id": "schema:Saturday"
    },
    "ScheduleAction": {
      "@id": "schema:ScheduleAction"
    },
    "ScholarlyArticle": {
      "@id": "schema:ScholarlyArticle"
    },
    "School": {
      "@id": "schema:School"
    },
    "ScreeningEvent": {
      "@id": "schema:ScreeningEvent"
    },
    "Sculpture": {
      "@id": "schema:Sculpture"
    },
    "SeaBodyOfWater": {
      "@id": "schema:SeaBodyOfWater"
    },
    "SearchAction": {
      "@id": "schema:SearchAction"
    },
    "SearchResultsPage": {
      "@id": "schema:SearchResultsPage"
    },
    "Season": {
      "@id": "schema:Season"
    },
    "Seat": {
      "@id": "schema:Seat"
    },
    "SeatingMap": {
      "@id": "schema:SeatingMap"
    },
    "SelfStorage": {
      "@id": "schema:SelfStorage"
    },
    "SellAction": {
      "@id": "schema:SellAction"
    },
    "SendAction": {
      "@id": "schema:SendAction"
    },
    "Series": {
      "@id": "schema:Series"
    },
    "Service": {
      "@id": "schema:Service"
    },
    "ServiceChannel": {
      "@id": "schema:ServiceChannel"
    },
    "ShareAction": {
      "@id": "schema:ShareAction"
    },
    "ShoeStore": {
      "@id": "schema:ShoeStore"
    },
    "ShoppingCenter": {
      "@id": "schema:ShoppingCenter"
    },
    "SingleBlindedTrial": {
      "@id": "schema:SingleBlindedTrial"
    },
    "SingleCenterTrial": {
      "@id": "schema:SingleCenterTrial"
    },
    "SingleFamilyResidence": {
      "@id": "schema:SingleFamilyResidence"
    },
    "SinglePlayer": {
      "@id": "schema:SinglePlayer"
    },
    "SingleRelease": {
      "@id": "schema:SingleRelease"
    },
    "SiteNavigationElement": {
      "@id": "schema:SiteNavigationElement"
    },
    "SkiResort": {
      "@id": "schema:SkiResort"
    },
    "Skin": {
      "@id": "schema:Skin"
    },
    "SocialEvent": {
      "@id": "schema:SocialEvent"
    },
    "SocialMediaPosting": {
      "@id": "schema:SocialMediaPosting"
    },
    "SoftwareApplication": {
      "@id": "schema:SoftwareApplication"
    },
    "SoftwareSourceCode": {
      "@id": "schema:SoftwareSourceCode"
    },
    "SoldOut": {
      "@id": "schema:SoldOut"
    },
    "SomeProducts": {
      "@id": "schema:SomeProducts"
    },
    "SoundtrackAlbum": {
      "@id": "schema:SoundtrackAlbum"
    },
    "SpeakableSpecification": {
      "@id": "schema:SpeakableSpecification"
    },
    "Specialty": {
      "@id": "schema:Specialty"
    },
    "SpeechPathology": {
      "@id": "schema:SpeechPathology"
    },
    "SpokenWordAlbum": {
      "@id": "schema:SpokenWordAlbum"
    },
    "SportingGoodsStore": {
      "@id": "schema:SportingGoodsStore"
    },
    "SportsActivityLocation": {
      "@id": "schema:SportsActivityLocation"
    },
    "SportsClub": {
      "@id": "schema:SportsClub"
    },
    "SportsEvent": {
      "@id": "schema:SportsEvent"
    },
    "SportsOrganization": {
      "@id": "schema:SportsOrganization"
    },
    "SportsTeam": {
      "@id": "schema:SportsTeam"
    },
    "SpreadsheetDigitalDocument": {
      "@id": "schema:SpreadsheetDigitalDocument"
    },
    "StadiumOrArena": {
      "@id": "schema:StadiumOrArena"
    },
    "State": {
      "@id": "schema:State"
    },
    "SteeringPositionValue": {
      "@id": "schema:SteeringPositionValue"
    },
    "Store": {
      "@id": "schema:Store"
    },
    "StrengthTraining": {
      "@id": "schema:StrengthTraining"
    },
    "StructuredValue": {
      "@id": "schema:StructuredValue"
    },
    "StudioAlbum": {
      "@id": "schema:StudioAlbum"
    },
    "StupidType": {
      "@id": "schema:StupidType"
    },
    "SubscribeAction": {
      "@id": "schema:SubscribeAction"
    },
    "Substance": {
      "@id": "schema:Substance"
    },
    "SubwayStation": {
      "@id": "schema:SubwayStation"
    },
    "Suite": {
      "@id": "schema:Suite"
    },
    "Sunday": {
      "@id": "schema:Sunday"
    },
    "SuperficialAnatomy": {
      "@id": "schema:SuperficialAnatomy"
    },
    "Surgical": {
      "@id": "schema:Surgical"
    },
    "SurgicalProcedure": {
      "@id": "schema:SurgicalProcedure"
    },
    "SuspendAction": {
      "@id": "schema:SuspendAction"
    },
    "Suspended": {
      "@id": "schema:Suspended"
    },
    "Synagogue": {
      "@id": "schema:Synagogue"
    },
    "TVClip": {
      "@id": "schema:TVClip"
    },
    "TVEpisode": {
      "@id": "schema:TVEpisode"
    },
    "TVSeason": {
      "@id": "schema:TVSeason"
    },
    "TVSeries": {
      "@id": "schema:TVSeries"
    },
    "Table": {
      "@id": "schema:Table"
    },
    "TakeAction": {
      "@id": "schema:TakeAction"
    },
    "TattooParlor": {
      "@id": "schema:TattooParlor"
    },
    "Taxi": {
      "@id": "schema:Taxi"
    },
    "TaxiReservation": {
      "@id": "schema:TaxiReservation"
    },
    "TaxiService": {
      "@id": "schema:TaxiService"
    },
    "TaxiStand": {
      "@id": "schema:TaxiStand"
    },
    "TaxiVehicleUsage": {
      "@id": "schema:TaxiVehicleUsage"
    },
    "TechArticle": {
      "@id": "schema:TechArticle"
    },
    "TelevisionChannel": {
      "@id": "schema:TelevisionChannel"
    },
    "TelevisionStation": {
      "@id": "schema:TelevisionStation"
    },
    "TennisComplex": {
      "@id": "schema:TennisComplex"
    },
    "Terminated": {
      "@id": "schema:Terminated"
    },
    "Text": {
      "@id": "schema:Text"
    },
    "TextDigitalDocument": {
      "@id": "schema:TextDigitalDocument"
    },
    "TheaterEvent": {
      "@id": "schema:TheaterEvent"
    },
    "TheaterGroup": {
      "@id": "schema:TheaterGroup"
    },
    "Therapeutic": {
      "@id": "schema:Therapeutic"
    },
    "TherapeuticProcedure": {
      "@id": "schema:TherapeuticProcedure"
    },
    "Thesis": {
      "@id": "schema:Thesis"
    },
    "Thing": {
      "@id": "schema:Thing"
    },
    "Throat": {
      "@id": "schema:Throat"
    },
    "Thursday": {
      "@id": "schema:Thursday"
    },
    "Ticket": {
      "@id": "schema:Ticket"
    },
    "TieAction": {
      "@id": "schema:TieAction"
    },
    "Time": {
      "@id": "schema:Time"
    },
    "TipAction": {
      "@id": "schema:TipAction"
    },
    "TireShop": {
      "@id": "schema:TireShop"
    },
    "TollFree": {
      "@id": "schema:TollFree"
    },
    "TouristAttraction": {
      "@id": "schema:TouristAttraction"
    },
    "TouristInformationCenter": {
      "@id": "schema:TouristInformationCenter"
    },
    "Toxicologic": {
      "@id": "schema:Toxicologic"
    },
    "ToyStore": {
      "@id": "schema:ToyStore"
    },
    "TrackAction": {
      "@id": "schema:TrackAction"
    },
    "TradeAction": {
      "@id": "schema:TradeAction"
    },
    "TraditionalChinese": {
      "@id": "schema:TraditionalChinese"
    },
    "TrainReservation": {
      "@id": "schema:TrainReservation"
    },
    "TrainStation": {
      "@id": "schema:TrainStation"
    },
    "TrainTrip": {
      "@id": "schema:TrainTrip"
    },
    "TransferAction": {
      "@id": "schema:TransferAction"
    },
    "TransitMap": {
      "@id": "schema:TransitMap"
    },
    "TravelAction": {
      "@id": "schema:TravelAction"
    },
    "TravelAgency": {
      "@id": "schema:TravelAgency"
    },
    "TreatmentIndication": {
      "@id": "schema:TreatmentIndication"
    },
    "TripleBlindedTrial": {
      "@id": "schema:TripleBlindedTrial"
    },
    "Tuesday": {
      "@id": "schema:Tuesday"
    },
    "TypeAndQuantityNode": {
      "@id": "schema:TypeAndQuantityNode"
    },
    "URL": {
      "@id": "schema:URL"
    },
    "Ultrasound": {
      "@id": "schema:Ultrasound"
    },
    "UnRegisterAction": {
      "@id": "schema:UnRegisterAction"
    },
    "UnitPriceSpecification": {
      "@id": "schema:UnitPriceSpecification"
    },
    "UpdateAction": {
      "@id": "schema:UpdateAction"
    },
    "Urologic": {
      "@id": "schema:Urologic"
    },
    "UseAction": {
      "@id": "schema:UseAction"
    },
    "UsedCondition": {
      "@id": "schema:UsedCondition"
    },
    "UserBlocks": {
      "@id": "schema:UserBlocks"
    },
    "UserCheckins": {
      "@id": "schema:UserCheckins"
    },
    "UserComments": {
      "@id": "schema:UserComments"
    },
    "UserDownloads": {
      "@id": "schema:UserDownloads"
    },
    "UserInteraction": {
      "@id": "schema:UserInteraction"
    },
    "UserLikes": {
      "@id": "schema:UserLikes"
    },
    "UserPageVisits": {
      "@id": "schema:UserPageVisits"
    },
    "UserPlays": {
      "@id": "schema:UserPlays"
    },
    "UserPlusOnes": {
      "@id": "schema:UserPlusOnes"
    },
    "UserTweets": {
      "@id": "schema:UserTweets"
    },
    "VeganDiet": {
      "@id": "schema:VeganDiet"
    },
    "VegetarianDiet": {
      "@id": "schema:VegetarianDiet"
    },
    "Vehicle": {
      "@id": "schema:Vehicle"
    },
    "Vein": {
      "@id": "schema:Vein"
    },
    "VenueMap": {
      "@id": "schema:VenueMap"
    },
    "Vessel": {
      "@id": "schema:Vessel"
    },
    "VeterinaryCare": {
      "@id": "schema:VeterinaryCare"
    },
    "VideoGallery": {
      "@id": "schema:VideoGallery"
    },
    "VideoGame": {
      "@id": "schema:VideoGame"
    },
    "VideoGameClip": {
      "@id": "schema:VideoGameClip"
    },
    "VideoGameSeries": {
      "@id": "schema:VideoGameSeries"
    },
    "VideoObject": {
      "@id": "schema:VideoObject"
    },
    "ViewAction": {
      "@id": "schema:ViewAction"
    },
    "VinylFormat": {
      "@id": "schema:VinylFormat"
    },
    "Virus": {
      "@id": "schema:Virus"
    },
    "VisualArtsEvent": {
      "@id": "schema:VisualArtsEvent"
    },
    "VisualArtwork": {
      "@id": "schema:VisualArtwork"
    },
    "VitalSign": {
      "@id": "schema:VitalSign"
    },
    "Volcano": {
      "@id": "schema:Volcano"
    },
    "VoteAction": {
      "@id": "schema:VoteAction"
    },
    "WPAdBlock": {
      "@id": "schema:WPAdBlock"
    },
    "WPFooter": {
      "@id": "schema:WPFooter"
    },
    "WPHeader": {
      "@id": "schema:WPHeader"
    },
    "WPSideBar": {
      "@id": "schema:WPSideBar"
    },
    "WantAction": {
      "@id": "schema:WantAction"
    },
    "WarrantyPromise": {
      "@id": "schema:WarrantyPromise"
    },
    "WarrantyScope": {
      "@id": "schema:WarrantyScope"
    },
    "WatchAction": {
      "@id": "schema:WatchAction"
    },
    "Waterfall": {
      "@id": "schema:Waterfall"
    },
    "WearAction": {
      "@id": "schema:WearAction"
    },
    "WebAPI": {
      "@id": "schema:WebAPI"
    },
    "WebApplication": {
      "@id": "schema:WebApplication"
    },
    "WebPage": {
      "@id": "schema:WebPage"
    },
    "WebPageElement": {
      "@id": "schema:WebPageElement"
    },
    "WebSite": {
      "@id": "schema:WebSite"
    },
    "Wednesday": {
      "@id": "schema:Wednesday"
    },
    "WesternConventional": {
      "@id": "schema:WesternConventional"
    },
    "Wholesale": {
      "@id": "schema:Wholesale"
    },
    "WholesaleStore": {
      "@id": "schema:WholesaleStore"
    },
    "WinAction": {
      "@id": "schema:WinAction"
    },
    "Winery": {
      "@id": "schema:Winery"
    },
    "Withdrawn": {
      "@id": "schema:Withdrawn"
    },
    "WorkersUnion": {
      "@id": "schema:WorkersUnion"
    },
    "WriteAction": {
      "@id": "schema:WriteAction"
    },
    "WritePermission": {
      "@id": "schema:WritePermission"
    },
    "XRay": {
      "@id": "schema:XRay"
    },
    "ZoneBoardingPolicy": {
      "@id": "schema:ZoneBoardingPolicy"
    },
    "Zoo": {
      "@id": "schema:Zoo"
    },
    "about": {
      "@id": "schema:about",
      "@container": "@set",
      "@type": "@id"
    },
    "abridged": {
      "@id": "schema:abridged"
    },
    "accelerationTime": {
      "@id": "schema:accelerationTime"
    },
    "acceptedAnswer": {
      "@id": "schema:acceptedAnswer",
      "@type": "@id"
    },
    "acceptedOffer": {
      "@id": "schema:acceptedOffer"
    },
    "acceptedPaymentMethod": {
      "@id": "schema:acceptedPaymentMethod"
    },
    "acceptsReservations": {
      "@id": "schema:acceptsReservations",
      "@type": "@id"
    },
    "accessCode": {
      "@id": "schema:accessCode"
    },
    "accessMode": {
      "@id": "schema:accessMode"
    },
    "accessModeSufficient": {
      "@id": "schema:accessModeSufficient"
    },
    "accessibilityAPI": {
      "@id": "schema:accessibilityAPI"
    },
    "accessibilityControl": {
      "@id": "schema:accessibilityControl"
    },
    "accessibilityFeature": {
      "@id": "schema:accessibilityFeature"
    },
    "accessibilityHazard": {
      "@id": "schema:accessibilityHazard"
    },
    "accessibilitySummary": {
      "@id": "schema:accessibilitySummary"
    },
    "accountId": {
      "@id": "schema:accountId"
    },
    "accountMinimumInflow": {
      "@id": "schema:accountMinimumInflow"
    },
    "accountOverdraftLimit": {
      "@id": "schema:accountOverdraftLimit"
    },
    "accountablePerson": {
      "@id": "schema:accountablePerson"
    },
    "acquiredFrom": {
      "@id": "schema:acquiredFrom"
    },
    "acrissCode": {
      "@id": "schema:acrissCode"
    },
    "action": {
      "@id": "schema:action"
    },
    "actionApplication": {
      "@id": "schema:actionApplication"
    },
    "actionOption": {
      "@id": "schema:actionOption"
    },
    "actionPlatform": {
      "@id": "schema:actionPlatform",
      "@type": "@id"
    },
    "actionStatus": {
      "@id": "schema:actionStatus"
    },
    "activeIngredient": {
      "@id": "schema:activeIngredient"
    },
    "activityDuration": {
      "@id": "schema:activityDuration"
    },
    "activityFrequency": {
      "@id": "schema:activityFrequency"
    },
    "actor": {
      "@id": "schema:actor"
    },
    "actors": {
      "@id": "schema:actors"
    },
    "addOn": {
      "@id": "schema:addOn"
    },
    "additionalName": {
      "@id": "schema:additionalName"
    },
    "additionalNumberOfGuests": {
      "@id": "schema:additionalNumberOfGuests"
    },
    "additionalProperty": {
      "@id": "schema:additionalProperty"
    },
    "additionalType": {
      "@id": "schema:additionalType",
      "@type": "@id"
    },
    "additionalVariable": {
      "@id": "schema:additionalVariable"
    },
    "address": {
      "@id": "schema:address",
      "@type": "@id"
    },
    "addressCountry": {
      "@id": "schema:addressCountry"
    },
    "addressLocality": {
      "@id": "schema:addressLocality"
    },
    "addressRegion": {
      "@id": "schema:addressRegion"
    },
    "administrationRoute": {
      "@id": "schema:administrationRoute"
    },
    "advanceBookingRequirement": {
      "@id": "schema:advanceBookingRequirement"
    },
    "adverseOutcome": {
      "@id": "schema:adverseOutcome"
    },
    "affectedBy": {
      "@id": "schema:affectedBy"
    },
    "affiliation": {
      "@id": "schema:affiliation",
      "@container": "@list",
      "@type": "@id"
    },
    "agent": {
      "@id": "schema:agent",
      "@type": "@id"
    },
    "aggregateRating": {
      "@id": "schema:aggregateRating"
    },
    "aircraft": {
      "@id": "schema:aircraft"
    },
    "album": {
      "@id": "schema:album"
    },
    "albumProductionType": {
      "@id": "schema:albumProductionType"
    },
    "albumRelease": {
      "@id": "schema:albumRelease"
    },
    "albumReleaseType": {
      "@id": "schema:albumReleaseType"
    },
    "albums": {
      "@id": "schema:albums"
    },
    "alcoholWarning": {
      "@id": "schema:alcoholWarning"
    },
    "algorithm": {
      "@id": "schema:algorithm"
    },
    "alignmentType": {
      "@id": "schema:alignmentType"
    },
    "alternateName": {
      "@id": "schema:alternateName"
    },
    "alternativeHeadline": {
      "@id": "schema:alternativeHeadline"
    },
    "alumni": {
      "@id": "schema:alumni"
    },
    "alumniOf": {
      "@id": "schema:alumniOf"
    },
    "amenityFeature": {
      "@id": "schema:amenityFeature"
    },
    "amount": {
      "@id": "schema:amount"
    },
    "amountOfThisGood": {
      "@id": "schema:amountOfThisGood"
    },
    "annualPercentageRate": {
      "@id": "schema:annualPercentageRate"
    },
    "answerCount": {
      "@id": "schema:answerCount"
    },
    "antagonist": {
      "@id": "schema:antagonist"
    },
    "applicableLocation": {
      "@id": "schema:applicableLocation"
    },
    "application": {
      "@id": "schema:application"
    },
    "applicationCategory": {
      "@id": "schema:applicationCategory",
      "@type": "@id"
    },
    "applicationSubCategory": {
      "@id": "schema:applicationSubCategory",
      "@type": "@id"
    },
    "applicationSuite": {
      "@id": "schema:applicationSuite"
    },
    "appliesToDeliveryMethod": {
      "@id": "schema:appliesToDeliveryMethod"
    },
    "appliesToPaymentMethod": {
      "@id": "schema:appliesToPaymentMethod"
    },
    "area": {
      "@id": "schema:area"
    },
    "areaServed": {
      "@id": "schema:areaServed"
    },
    "arrivalAirport": {
      "@id": "schema:arrivalAirport"
    },
    "arrivalBusStop": {
      "@id": "schema:arrivalBusStop"
    },
    "arrivalGate": {
      "@id": "schema:arrivalGate"
    },
    "arrivalPlatform": {
      "@id": "schema:arrivalPlatform"
    },
    "arrivalStation": {
      "@id": "schema:arrivalStation"
    },
    "arrivalTerminal": {
      "@id": "schema:arrivalTerminal"
    },
    "arrivalTime": {
      "@id": "schema:arrivalTime",
      "@type": "DateTime"
    },
    "artEdition": {
      "@id": "schema:artEdition"
    },
    "artMedium": {
      "@id": "schema:artMedium",
      "@type": "@id"
    },
    "arterialBranch": {
      "@id": "schema:arterialBranch"
    },
    "artform": {
      "@id": "schema:artform",
      "@type": "@id"
    },
    "articleBody": {
      "@id": "schema:articleBody"
    },
    "articleSection": {
      "@id": "schema:articleSection"
    },
    "artist": {
      "@id": "schema:artist"
    },
    "artworkSurface": {
      "@id": "schema:artworkSurface",
      "@type": "@id"
    },
    "aspect": {
      "@id": "schema:aspect"
    },
    "assembly": {
      "@id": "schema:assembly"
    },
    "assemblyVersion": {
      "@id": "schema:assemblyVersion"
    },
    "associatedAnatomy": {
      "@id": "schema:associatedAnatomy"
    },
    "associatedArticle": {
      "@id": "schema:associatedArticle"
    },
    "associatedMedia": {
      "@id": "schema:associatedMedia"
    },
    "associatedPathophysiology": {
      "@id": "schema:associatedPathophysiology"
    },
    "athlete": {
      "@id": "schema:athlete"
    },
    "attendee": {
      "@id": "schema:attendee"
    },
    "attendees": {
      "@id": "schema:attendees"
    },
    "audience": {
      "@id": "schema:audience"
    },
    "audienceType": {
      "@id": "schema:audienceType"
    },
    "audio": {
      "@id": "schema:audio"
    },
    "author": {
      "@id": "schema:author",
      "@container": "@list",
      "@type": "@id"
    },
    "availability": {
      "@id": "schema:availability"
    },
    "availabilityEnds": {
      "@id": "schema:availabilityEnds",
      "@type": "DateTime"
    },
    "availabilityStarts": {
      "@id": "schema:availabilityStarts",
      "@type": "DateTime"
    },
    "availableAtOrFrom": {
      "@id": "schema:availableAtOrFrom"
    },
    "availableChannel": {
      "@id": "schema:availableChannel"
    },
    "availableDeliveryMethod": {
      "@id": "schema:availableDeliveryMethod"
    },
    "availableFrom": {
      "@id": "schema:availableFrom",
      "@type": "DateTime"
    },
    "availableIn": {
      "@id": "schema:availableIn"
    },
    "availableLanguage": {
      "@id": "schema:availableLanguage"
    },
    "availableOnDevice": {
      "@id": "schema:availableOnDevice"
    },
    "availableService": {
      "@id": "schema:availableService"
    },
    "availableStrength": {
      "@id": "schema:availableStrength"
    },
    "availableTest": {
      "@id": "schema:availableTest"
    },
    "availableThrough": {
      "@id": "schema:availableThrough",
      "@type": "DateTime"
    },
    "award": {
      "@id": "schema:award"
    },
    "awards": {
      "@id": "schema:awards"
    },
    "awayTeam": {
      "@id": "schema:awayTeam"
    },
    "background": {
      "@id": "schema:background"
    },
    "bankAccountType": {
      "@id": "schema:bankAccountType",
      "@type": "@id"
    },
    "baseSalary": {
      "@id": "schema:baseSalary"
    },
    "bed": {
      "@id": "schema:bed"
    },
    "beneficiaryBank": {
      "@id": "schema:beneficiaryBank"
    },
    "benefits": {
      "@id": "schema:benefits"
    },
    "benefitsSummaryUrl": {
      "@id": "schema:benefitsSummaryUrl",
      "@type": "@id"
    },
    "bestRating": {
      "@id": "schema:bestRating"
    },
    "billingAddress": {
      "@id": "schema:billingAddress"
    },
    "billingIncrement": {
      "@id": "schema:billingIncrement"
    },
    "billingPeriod": {
      "@id": "schema:billingPeriod"
    },
    "biomechnicalClass": {
      "@id": "schema:biomechnicalClass"
    },
    "birthDate": {
      "@id": "schema:birthDate",
      "@type": "Date"
    },
    "birthPlace": {
      "@id": "schema:birthPlace"
    },
    "bitrate": {
      "@id": "schema:bitrate"
    },
    "blogPost": {
      "@id": "schema:blogPost"
    },
    "blogPosts": {
      "@id": "schema:blogPosts"
    },
    "bloodSupply": {
      "@id": "schema:bloodSupply"
    },
    "boardingGroup": {
      "@id": "schema:boardingGroup"
    },
    "boardingPolicy": {
      "@id": "schema:boardingPolicy"
    },
    "bodyLocation": {
      "@id": "schema:bodyLocation"
    },
    "bodyType": {
      "@id": "schema:bodyType",
      "@type": "@id"
    },
    "bookEdition": {
      "@id": "schema:bookEdition"
    },
    "bookFormat": {
      "@id": "schema:bookFormat"
    },
    "bookingAgent": {
      "@id": "schema:bookingAgent"
    },
    "bookingTime": {
      "@id": "schema:bookingTime",
      "@type": "DateTime"
    },
    "borrower": {
      "@id": "schema:borrower"
    },
    "box": {
      "@id": "schema:box"
    },
    "branch": {
      "@id": "schema:branch"
    },
    "branchCode": {
      "@id": "schema:branchCode"
    },
    "branchOf": {
      "@id": "schema:branchOf"
    },
    "brand": {
      "@id": "schema:brand"
    },
    "breadcrumb": {
      "@id": "schema:breadcrumb"
    },
    "breastfeedingWarning": {
      "@id": "schema:breastfeedingWarning"
    },
    "broadcastAffiliateOf": {
      "@id": "schema:broadcastAffiliateOf"
    },
    "broadcastChannelId": {
      "@id": "schema:broadcastChannelId"
    },
    "broadcastDisplayName": {
      "@id": "schema:broadcastDisplayName"
    },
    "broadcastFrequency": {
      "@id": "schema:broadcastFrequency"
    },
    "broadcastFrequencyValue": {
      "@id": "schema:broadcastFrequencyValue"
    },
    "broadcastOfEvent": {
      "@id": "schema:broadcastOfEvent"
    },
    "broadcastServiceTier": {
      "@id": "schema:broadcastServiceTier"
    },
    "broadcastTimezone": {
      "@id": "schema:broadcastTimezone"
    },
    "broadcaster": {
      "@id": "schema:broadcaster"
    },
    "broker": {
      "@id": "schema:broker"
    },
    "browserRequirements": {
      "@id": "schema:browserRequirements"
    },
    "busName": {
      "@id": "schema:busName"
    },
    "busNumber": {
      "@id": "schema:busNumber"
    },
    "businessFunction": {
      "@id": "schema:businessFunction"
    },
    "buyer": {
      "@id": "schema:buyer"
    },
    "byArtist": {
      "@id": "schema:byArtist"
    },
    "calories": {
      "@id": "schema:calories"
    },
    "candidate": {
      "@id": "schema:candidate"
    },
    "caption": {
      "@id": "schema:caption"
    },
    "carbohydrateContent": {
      "@id": "schema:carbohydrateContent"
    },
    "cargoVolume": {
      "@id": "schema:cargoVolume"
    },
    "carrier": {
      "@id": "schema:carrier"
    },
    "carrierRequirements": {
      "@id": "schema:carrierRequirements"
    },
    "cashBack": {
      "@id": "schema:cashBack"
    },
    "catalog": {
      "@id": "schema:catalog"
    },
    "catalogNumber": {
      "@id": "schema:catalogNumber"
    },
    "category": {
      "@id": "schema:category"
    },
    "cause": {
      "@id": "schema:cause"
    },
    "causeOf": {
      "@id": "schema:causeOf"
    },
    "character": {
      "@id": "schema:character"
    },
    "characterAttribute": {
      "@id": "schema:characterAttribute"
    },
    "characterName": {
      "@id": "schema:characterName"
    },
    "cheatCode": {
      "@id": "schema:cheatCode"
    },
    "checkinTime": {
      "@id": "schema:checkinTime",
      "@type": "DateTime"
    },
    "checkoutTime": {
      "@id": "schema:checkoutTime",
      "@type": "DateTime"
    },
    "childMaxAge": {
      "@id": "schema:childMaxAge"
    },
    "childMinAge": {
      "@id": "schema:childMinAge"
    },
    "children": {
      "@id": "schema:children"
    },
    "cholesterolContent": {
      "@id": "schema:cholesterolContent"
    },
    "circle": {
      "@id": "schema:circle"
    },
    "citation": {
      "@id": "schema:citation",
      "@container": "@list",
      "@type": "@id"
    },
    "claimReviewed": {
      "@id": "schema:claimReviewed"
    },
    "clincalPharmacology": {
      "@id": "schema:clincalPharmacology"
    },
    "clinicalPharmacology": {
      "@id": "schema:clinicalPharmacology"
    },
    "clipNumber": {
      "@id": "schema:clipNumber"
    },
    "closes": {
      "@id": "schema:closes"
    },
    "coach": {
      "@id": "schema:coach"
    },
    "code": {
      "@id": "schema:code"
    },
    "codeRepository": {
      "@id": "schema:codeRepository",
      "@type": "@id"
    },
    "codeSampleType": {
      "@id": "schema:codeSampleType"
    },
    "codeValue": {
      "@id": "schema:codeValue"
    },
    "codingSystem": {
      "@id": "schema:codingSystem"
    },
    "colleague": {
      "@id": "schema:colleague",
      "@type": "@id"
    },
    "colleagues": {
      "@id": "schema:colleagues"
    },
    "collection": {
      "@id": "schema:collection"
    },
    "color": {
      "@id": "schema:color"
    },
    "colorist": {
      "@id": "schema:colorist"
    },
    "comment": {
      "@id": "schema:comment",
      "@container": "@set",
      "@type": "@id"
    },
    "commentCount": {
      "@id": "schema:commentCount"
    },
    "commentText": {
      "@id": "schema:commentText"
    },
    "commentTime": {
      "@id": "schema:commentTime",
      "@type": "Date"
    },
    "competitor": {
      "@id": "schema:competitor"
    },
    "composer": {
      "@id": "schema:composer"
    },
    "comprisedOf": {
      "@id": "schema:comprisedOf"
    },
    "confirmationNumber": {
      "@id": "schema:confirmationNumber"
    },
    "connectedTo": {
      "@id": "schema:connectedTo"
    },
    "contactOption": {
      "@id": "schema:contactOption"
    },
    "contactPoint": {
      "@id": "schema:contactPoint"
    },
    "contactPoints": {
      "@id": "schema:contactPoints"
    },
    "contactType": {
      "@id": "schema:contactType"
    },
    "contactlessPayment": {
      "@id": "schema:contactlessPayment"
    },
    "containedIn": {
      "@id": "schema:containedIn"
    },
    "containedInPlace": {
      "@id": "schema:containedInPlace"
    },
    "containsPlace": {
      "@id": "schema:containsPlace"
    },
    "containsSeason": {
      "@id": "schema:containsSeason"
    },
    "contentLocation": {
      "@id": "schema:contentLocation"
    },
    "contentRating": {
      "@id": "schema:contentRating"
    },
    "contentReferenceTime": {
      "@id": "schema:contentReferenceTime",
      "@type": "DateTime"
    },
    "contentSize": {
      "@id": "schema:contentSize"
    },
    "contentType": {
      "@id": "schema:contentType"
    },
    "contentUrl": {
      "@id": "schema:contentUrl",
      "@type": "@id"
    },
    "contraindication": {
      "@id": "schema:contraindication"
    },
    "contributor": {
      "@id": "schema:contributor",
      "@container": "@list",
      "@type": "@id"
    },
    "cookTime": {
      "@id": "schema:cookTime"
    },
    "cookingMethod": {
      "@id": "schema:cookingMethod"
    },
    "copyrightHolder": {
      "@id": "schema:copyrightHolder",
      "@type": "@id"
    },
    "copyrightYear": {
      "@id": "schema:copyrightYear"
    },
    "cost": {
      "@id": "schema:cost"
    },
    "costCategory": {
      "@id": "schema:costCategory"
    },
    "costCurrency": {
      "@id": "schema:costCurrency"
    },
    "costOrigin": {
      "@id": "schema:costOrigin"
    },
    "costPerUnit": {
      "@id": "schema:costPerUnit"
    },
    "countriesNotSupported": {
      "@id": "schema:countriesNotSupported"
    },
    "countriesSupported": {
      "@id": "schema:countriesSupported"
    },
    "countryOfOrigin": {
      "@id": "schema:countryOfOrigin"
    },
    "course": {
      "@id": "schema:course"
    },
    "courseCode": {
      "@id": "schema:courseCode"
    },
    "courseMode": {
      "@id": "schema:courseMode",
      "@type": "@id"
    },
    "coursePrerequisites": {
      "@id": "schema:coursePrerequisites"
    },
    "coverageEndTime": {
      "@id": "schema:coverageEndTime",
      "@type": "DateTime"
    },
    "coverageStartTime": {
      "@id": "schema:coverageStartTime",
      "@type": "DateTime"
    },
    "creator": {
      "@id": "schema:creator",
      "@type": "@id"
    },
    "creditedTo": {
      "@id": "schema:creditedTo"
    },
    "cssSelector": {
      "@id": "schema:cssSelector"
    },
    "currenciesAccepted": {
      "@id": "schema:currenciesAccepted"
    },
    "currency": {
      "@id": "schema:currency"
    },
    "currentExchangeRate": {
      "@id": "schema:currentExchangeRate"
    },
    "customer": {
      "@id": "schema:customer"
    },
    "dataFeedElement": {
      "@id": "schema:dataFeedElement"
    },
    "dataset": {
      "@id": "schema:dataset"
    },
    "datasetTimeInterval": {
      "@id": "schema:datasetTimeInterval",
      "@type": "DateTime"
    },
    "dateCreated": {
      "@id": "schema:dateCreated",
      "@type": "Date"
    },
    "dateDeleted": {
      "@id": "schema:dateDeleted",
      "@type": "DateTime"
    },
    "dateIssued": {
      "@id": "schema:dateIssued",
      "@type": "DateTime"
    },
    "dateModified": {
      "@id": "schema:dateModified",
      "@type": "Date"
    },
    "datePosted": {
      "@id": "schema:datePosted",
      "@type": "Date"
    },
    "datePublished": {
      "@id": "http://schema.org/datePublished"
    },
    "dateRead": {
      "@id": "schema:dateRead",
      "@type": "DateTime"
    },
    "dateReceived": {
      "@id": "schema:dateReceived",
      "@type": "DateTime"
    },
    "dateSent": {
      "@id": "schema:dateSent",
      "@type": "DateTime"
    },
    "dateVehicleFirstRegistered": {
      "@id": "schema:dateVehicleFirstRegistered",
      "@type": "Date"
    },
    "dateline": {
      "@id": "schema:dateline"
    },
    "dayOfWeek": {
      "@id": "schema:dayOfWeek"
    },
    "deathDate": {
      "@id": "schema:deathDate",
      "@type": "Date"
    },
    "deathPlace": {
      "@id": "schema:deathPlace"
    },
    "defaultValue": {
      "@id": "schema:defaultValue"
    },
    "deliveryAddress": {
      "@id": "schema:deliveryAddress"
    },
    "deliveryLeadTime": {
      "@id": "schema:deliveryLeadTime"
    },
    "deliveryMethod": {
      "@id": "schema:deliveryMethod"
    },
    "deliveryStatus": {
      "@id": "schema:deliveryStatus"
    },
    "department": {
      "@id": "schema:department"
    },
    "departureAirport": {
      "@id": "schema:departureAirport"
    },
    "departureBusStop": {
      "@id": "schema:departureBusStop"
    },
    "departureGate": {
      "@id": "schema:departureGate"
    },
    "departurePlatform": {
      "@id": "schema:departurePlatform"
    },
    "departureStation": {
      "@id": "schema:departureStation"
    },
    "departureTerminal": {
      "@id": "schema:departureTerminal"
    },
    "departureTime": {
      "@id": "schema:departureTime",
      "@type": "DateTime"
    },
    "dependencies": {
      "@id": "schema:dependencies"
    },
    "depth": {
      "@id": "schema:depth"
    },
    "description": {
      "@id": "schema:description"
    },
    "device": {
      "@id": "schema:device"
    },
    "diagnosis": {
      "@id": "schema:diagnosis"
    },
    "diagram": {
      "@id": "schema:diagram"
    },
    "diet": {
      "@id": "schema:diet"
    },
    "dietFeatures": {
      "@id": "schema:dietFeatures"
    },
    "differentialDiagnosis": {
      "@id": "schema:differentialDiagnosis"
    },
    "director": {
      "@id": "schema:director"
    },
    "directors": {
      "@id": "schema:directors"
    },
    "disambiguatingDescription": {
      "@id": "schema:disambiguatingDescription"
    },
    "discount": {
      "@id": "schema:discount"
    },
    "discountCode": {
      "@id": "schema:discountCode"
    },
    "discountCurrency": {
      "@id": "schema:discountCurrency"
    },
    "discusses": {
      "@id": "schema:discusses"
    },
    "discussionUrl": {
      "@id": "schema:discussionUrl",
      "@type": "@id"
    },
    "dissolutionDate": {
      "@id": "schema:dissolutionDate",
      "@type": "Date"
    },
    "distance": {
      "@id": "schema:distance"
    },
    "distinguishingSign": {
      "@id": "schema:distinguishingSign"
    },
    "distribution": {
      "@id": "schema:distribution",
      "@container": "@set",
      "@type": "@id"
    },
    "documentation": {
      "@id": "schema:documentation",
      "@type": "@id"
    },
    "domainIncludes": {
      "@id": "schema:domainIncludes"
    },
    "domiciledMortgage": {
      "@id": "schema:domiciledMortgage"
    },
    "doorTime": {
      "@id": "schema:doorTime",
      "@type": "DateTime"
    },
    "dosageForm": {
      "@id": "schema:dosageForm"
    },
    "doseSchedule": {
      "@id": "schema:doseSchedule"
    },
    "doseUnit": {
      "@id": "schema:doseUnit"
    },
    "doseValue": {
      "@id": "schema:doseValue"
    },
    "downPayment": {
      "@id": "schema:downPayment"
    },
    "downloadUrl": {
      "@id": "schema:downloadUrl",
      "@type": "@id"
    },
    "downvoteCount": {
      "@id": "schema:downvoteCount"
    },
    "drainsTo": {
      "@id": "schema:drainsTo"
    },
    "driveWheelConfiguration": {
      "@id": "schema:driveWheelConfiguration"
    },
    "dropoffLocation": {
      "@id": "schema:dropoffLocation"
    },
    "dropoffTime": {
      "@id": "schema:dropoffTime",
      "@type": "DateTime"
    },
    "drug": {
      "@id": "schema:drug"
    },
    "drugClass": {
      "@id": "schema:drugClass"
    },
    "drugUnit": {
      "@id": "schema:drugUnit"
    },
    "duns": {
      "@id": "schema:duns"
    },
    "duplicateTherapy": {
      "@id": "schema:duplicateTherapy"
    },
    "duration": {
      "@id": "schema:duration"
    },
    "durationOfWarranty": {
      "@id": "schema:durationOfWarranty"
    },
    "earlyPrepaymentPenalty": {
      "@id": "schema:earlyPrepaymentPenalty"
    },
    "editor": {
      "@id": "schema:editor",
      "@container": "@list",
      "@type": "@id"
    },
    "educationRequirements": {
      "@id": "schema:educationRequirements"
    },
    "educationalAlignment": {
      "@id": "schema:educationalAlignment"
    },
    "educationalCredentialAwarded": {
      "@id": "schema:educationalCredentialAwarded",
      "@type": "@id"
    },
    "educationalFramework": {
      "@id": "schema:educationalFramework"
    },
    "educationalRole": {
      "@id": "schema:educationalRole"
    },
    "educationalUse": {
      "@id": "schema:educationalUse"
    },
    "elevation": {
      "@id": "schema:elevation"
    },
    "eligibleCustomerType": {
      "@id": "schema:eligibleCustomerType"
    },
    "eligibleDuration": {
      "@id": "schema:eligibleDuration"
    },
    "eligibleQuantity": {
      "@id": "schema:eligibleQuantity"
    },
    "eligibleRegion": {
      "@id": "schema:eligibleRegion"
    },
    "eligibleTransactionVolume": {
      "@id": "schema:eligibleTransactionVolume"
    },
    "email": {
      "@id": "schema:email"
    },
    "embedUrl": {
      "@id": "schema:embedUrl",
      "@type": "@id"
    },
    "emissionsCO2": {
      "@id": "schema:emissionsCO2"
    },
    "employee": {
      "@id": "schema:employee"
    },
    "employees": {
      "@id": "schema:employees"
    },
    "employmentType": {
      "@id": "schema:employmentType"
    },
    "encodesCreativeWork": {
      "@id": "schema:encodesCreativeWork",
      "@type": "@id"
    },
    "encoding": {
      "@id": "schema:encoding",
      "@container": "@set",
      "@type": "@id"
    },
    "encodingFormat": {
      "@id": "schema:encodingFormat"
    },
    "encodingType": {
      "@id": "schema:encodingType"
    },
    "encodings": {
      "@id": "schema:encodings"
    },
    "endDate": {
      "@id": "schema:endDate",
      "@type": "Date"
    },
    "endTime": {
      "@id": "http://schema.org/endTime"
    },
    "endorsee": {
      "@id": "schema:endorsee"
    },
    "endorsers": {
      "@id": "schema:endorsers"
    },
    "engineDisplacement": {
      "@id": "schema:engineDisplacement"
    },
    "enginePower": {
      "@id": "schema:enginePower"
    },
    "engineType": {
      "@id": "schema:engineType",
      "@type": "@id"
    },
    "entertainmentBusiness": {
      "@id": "schema:entertainmentBusiness"
    },
    "epidemiology": {
      "@id": "schema:epidemiology"
    },
    "episode": {
      "@id": "schema:episode"
    },
    "episodeNumber": {
      "@id": "schema:episodeNumber"
    },
    "episodes": {
      "@id": "schema:episodes"
    },
    "equal": {
      "@id": "schema:equal"
    },
    "error": {
      "@id": "schema:error",
      "@type": "@id"
    },
    "estimatedFlightDuration": {
      "@id": "schema:estimatedFlightDuration"
    },
    "estimatesRiskOf": {
      "@id": "schema:estimatesRiskOf"
    },
    "event": {
      "@id": "schema:event"
    },
    "eventStatus": {
      "@id": "schema:eventStatus"
    },
    "events": {
      "@id": "schema:events"
    },
    "evidenceLevel": {
      "@id": "schema:evidenceLevel"
    },
    "evidenceOrigin": {
      "@id": "schema:evidenceOrigin"
    },
    "exampleOfWork": {
      "@id": "schema:exampleOfWork",
      "@container": "@set",
      "@type": "@id"
    },
    "exchangeRate": {
      "@id": "schema:exchangeRate"
    },
    "exchangeRateSpread": {
      "@id": "schema:exchangeRateSpread"
    },
    "executableLibraryName": {
      "@id": "schema:executableLibraryName"
    },
    "exerciseCourse": {
      "@id": "schema:exerciseCourse"
    },
    "exercisePlan": {
      "@id": "schema:exercisePlan"
    },
    "exerciseRelatedDiet": {
      "@id": "schema:exerciseRelatedDiet"
    },
    "exerciseType": {
      "@id": "schema:exerciseType"
    },
    "exifData": {
      "@id": "schema:exifData",
      "@container": "@set",
      "@type": "@id"
    },
    "expectedArrivalFrom": {
      "@id": "schema:expectedArrivalFrom",
      "@type": "DateTime"
    },
    "expectedArrivalUntil": {
      "@id": "schema:expectedArrivalUntil",
      "@type": "DateTime"
    },
    "expectedPrognosis": {
      "@id": "schema:expectedPrognosis"
    },
    "expectsAcceptanceOf": {
      "@id": "schema:expectsAcceptanceOf",
      "@type": "@id"
    },
    "experienceRequirements": {
      "@id": "schema:experienceRequirements"
    },
    "expertConsiderations": {
      "@id": "schema:expertConsiderations"
    },
    "expires": {
      "@id": "schema:expires",
      "@type": "Date"
    },
    "familyName": {
      "@id": "schema:familyName"
    },
    "fatContent": {
      "@id": "schema:fatContent"
    },
    "faxNumber": {
      "@id": "schema:faxNumber"
    },
    "featureList": {
      "@id": "schema:featureList",
      "@type": "@id"
    },
    "feesAndCommissionsSpecification": {
      "@id": "schema:feesAndCommissionsSpecification",
      "@type": "@id"
    },
    "fiberContent": {
      "@id": "schema:fiberContent"
    },
    "fileFormat": {
      "@id": "schema:fileFormat",
      "@type": "@id"
    },
    "fileSize": {
      "@id": "schema:fileSize"
    },
    "firstPerformance": {
      "@id": "schema:firstPerformance"
    },
    "flightDistance": {
      "@id": "schema:flightDistance"
    },
    "flightNumber": {
      "@id": "schema:flightNumber"
    },
    "floorLimit": {
      "@id": "schema:floorLimit"
    },
    "floorSize": {
      "@id": "schema:floorSize"
    },
    "followee": {
      "@id": "schema:followee"
    },
    "follows": {
      "@id": "schema:follows"
    },
    "followup": {
      "@id": "schema:followup"
    },
    "foodEstablishment": {
      "@id": "schema:foodEstablishment"
    },
    "foodEvent": {
      "@id": "schema:foodEvent"
    },
    "foodWarning": {
      "@id": "schema:foodWarning"
    },
    "founder": {
      "@id": "schema:founder"
    },
    "founders": {
      "@id": "schema:founders"
    },
    "foundingDate": {
      "@id": "schema:foundingDate",
      "@type": "Date"
    },
    "foundingLocation": {
      "@id": "schema:foundingLocation"
    },
    "free": {
      "@id": "schema:free"
    },
    "frequency": {
      "@id": "schema:frequency"
    },
    "fromLocation": {
      "@id": "schema:fromLocation"
    },
    "fuelCapacity": {
      "@id": "schema:fuelCapacity"
    },
    "fuelConsumption": {
      "@id": "schema:fuelConsumption"
    },
    "fuelEfficiency": {
      "@id": "schema:fuelEfficiency"
    },
    "fuelType": {
      "@id": "schema:fuelType",
      "@type": "@id"
    },
    "function": {
      "@id": "schema:function"
    },
    "functionalClass": {
      "@id": "schema:functionalClass"
    },
    "funder": {
      "@id": "schema:funder",
      "@container": "@set",
      "@type": "@id"
    },
    "game": {
      "@id": "schema:game"
    },
    "gameItem": {
      "@id": "schema:gameItem"
    },
    "gameLocation": {
      "@id": "schema:gameLocation",
      "@type": "@id"
    },
    "gamePlatform": {
      "@id": "schema:gamePlatform",
      "@type": "@id"
    },
    "gameServer": {
      "@id": "schema:gameServer"
    },
    "gameTip": {
      "@id": "schema:gameTip"
    },
    "gender": {
      "@id": "schema:gender"
    },
    "genre": {
      "@id": "schema:genre",
      "@type": "@id"
    },
    "geo": {
      "@id": "schema:geo"
    },
    "geoMidpoint": {
      "@id": "schema:geoMidpoint"
    },
    "geoRadius": {
      "@id": "schema:geoRadius"
    },
    "geographicArea": {
      "@id": "schema:geographicArea"
    },
    "geospatiallyContains": {
      "@id": "schema:geospatiallyContains"
    },
    "geospatiallyCoveredBy": {
      "@id": "schema:geospatiallyCoveredBy"
    },
    "geospatiallyCovers": {
      "@id": "schema:geospatiallyCovers"
    },
    "geospatiallyCrosses": {
      "@id": "schema:geospatiallyCrosses"
    },
    "geospatiallyDisjoint": {
      "@id": "schema:geospatiallyDisjoint"
    },
    "geospatiallyEquals": {
      "@id": "schema:geospatiallyEquals"
    },
    "geospatiallyIntersects": {
      "@id": "schema:geospatiallyIntersects"
    },
    "geospatiallyOverlaps": {
      "@id": "schema:geospatiallyOverlaps"
    },
    "geospatiallyTouches": {
      "@id": "schema:geospatiallyTouches"
    },
    "geospatiallyWithin": {
      "@id": "schema:geospatiallyWithin"
    },
    "givenName": {
      "@id": "schema:givenName"
    },
    "globalLocationNumber": {
      "@id": "schema:globalLocationNumber"
    },
    "gracePeriod": {
      "@id": "schema:gracePeriod"
    },
    "grantee": {
      "@id": "schema:grantee",
      "@type": "@id"
    },
    "greater": {
      "@id": "schema:greater"
    },
    "greaterOrEqual": {
      "@id": "schema:greaterOrEqual"
    },
    "gtin12": {
      "@id": "schema:gtin12"
    },
    "gtin13": {
      "@id": "schema:gtin13"
    },
    "gtin14": {
      "@id": "schema:gtin14"
    },
    "gtin8": {
      "@id": "schema:gtin8"
    },
    "guideline": {
      "@id": "schema:guideline"
    },
    "guidelineDate": {
      "@id": "schema:guidelineDate",
      "@type": "Date"
    },
    "guidelineSubject": {
      "@id": "schema:guidelineSubject"
    },
    "hasBroadcastChannel": {
      "@id": "schema:hasBroadcastChannel"
    },
    "hasCategoryCode": {
      "@id": "schema:hasCategoryCode"
    },
    "hasCourseInstance": {
      "@id": "schema:hasCourseInstance"
    },
    "hasDeliveryMethod": {
      "@id": "schema:hasDeliveryMethod"
    },
    "hasDigitalDocumentPermission": {
      "@id": "schema:hasDigitalDocumentPermission",
      "@container": "@set",
      "@type": "@id"
    },
    "hasMap": {
      "@id": "schema:hasMap",
      "@type": "@id"
    },
    "hasMenu": {
      "@id": "schema:hasMenu",
      "@type": "@id"
    },
    "hasMenuItem": {
      "@id": "schema:hasMenuItem"
    },
    "hasMenuSection": {
      "@id": "schema:hasMenuSection"
    },
    "hasOfferCatalog": {
      "@id": "schema:hasOfferCatalog"
    },
    "hasPOS": {
      "@id": "schema:hasPOS"
    },
    "hasPart": {
      "@id": "schema:hasPart",
      "@container": "@list",
      "@type": "@id"
    },
    "headline": {
      "@id": "schema:headline"
    },
    "healthCondition": {
      "@id": "schema:healthCondition"
    },
    "healthPlanCoinsuranceOption": {
      "@id": "schema:healthPlanCoinsuranceOption"
    },
    "healthPlanCoinsuranceRate": {
      "@id": "schema:healthPlanCoinsuranceRate"
    },
    "healthPlanCopay": {
      "@id": "schema:healthPlanCopay"
    },
    "healthPlanCopayOption": {
      "@id": "schema:healthPlanCopayOption"
    },
    "healthPlanCostSharing": {
      "@id": "schema:healthPlanCostSharing"
    },
    "healthPlanDrugOption": {
      "@id": "schema:healthPlanDrugOption"
    },
    "healthPlanDrugTier": {
      "@id": "schema:healthPlanDrugTier"
    },
    "healthPlanId": {
      "@id": "schema:healthPlanId"
    },
    "healthPlanMarketingUrl": {
      "@id": "schema:healthPlanMarketingUrl",
      "@type": "@id"
    },
    "healthPlanNetworkId": {
      "@id": "schema:healthPlanNetworkId"
    },
    "healthPlanNetworkTier": {
      "@id": "schema:healthPlanNetworkTier"
    },
    "healthPlanPharmacyCategory": {
      "@id": "schema:healthPlanPharmacyCategory"
    },
    "height": {
      "@id": "schema:height"
    },
    "highPrice": {
      "@id": "schema:highPrice"
    },
    "hiringOrganization": {
      "@id": "schema:hiringOrganization"
    },
    "homeLocation": {
      "@id": "schema:homeLocation"
    },
    "homeTeam": {
      "@id": "schema:homeTeam"
    },
    "honorificPrefix": {
      "@id": "schema:honorificPrefix"
    },
    "honorificSuffix": {
      "@id": "schema:honorificSuffix"
    },
    "hospitalAffiliation": {
      "@id": "schema:hospitalAffiliation"
    },
    "hostingOrganization": {
      "@id": "schema:hostingOrganization"
    },
    "hoursAvailable": {
      "@id": "schema:hoursAvailable"
    },
    "howPerformed": {
      "@id": "schema:howPerformed"
    },
    "httpMethod": {
      "@id": "schema:httpMethod"
    },
    "iataCode": {
      "@id": "schema:iataCode"
    },
    "icaoCode": {
      "@id": "schema:icaoCode"
    },
    "identifier": {
      "@id": "schema:identifier",
      "@type": "@id"
    },
    "identifyingExam": {
      "@id": "schema:identifyingExam"
    },
    "identifyingTest": {
      "@id": "schema:identifyingTest"
    },
    "illustrator": {
      "@id": "schema:illustrator"
    },
    "image": {
      "@id": "schema:image",
      "@type": "@id"
    },
    "imagingTechnique": {
      "@id": "schema:imagingTechnique"
    },
    "inAlbum": {
      "@id": "schema:inAlbum"
    },
    "inBroadcastLineup": {
      "@id": "schema:inBroadcastLineup"
    },
    "inCodeSet": {
      "@id": "schema:inCodeSet",
      "@type": "@id"
    },
    "inLanguage": {
      "@id": "schema:inLanguage"
    },
    "inPlaylist": {
      "@id": "schema:inPlaylist"
    },
    "inSupportOf": {
      "@id": "schema:inSupportOf"
    },
    "incentiveCompensation": {
      "@id": "schema:incentiveCompensation"
    },
    "incentives": {
      "@id": "schema:incentives"
    },
    "includedComposition": {
      "@id": "schema:includedComposition"
    },
    "includedDataCatalog": {
      "@id": "schema:includedDataCatalog"
    },
    "includedInDataCatalog": {
      "@id": "schema:includedInDataCatalog"
    },
    "includedInHealthInsurancePlan": {
      "@id": "schema:includedInHealthInsurancePlan"
    },
    "includedRiskFactor": {
      "@id": "schema:includedRiskFactor"
    },
    "includesHealthPlanFormulary": {
      "@id": "schema:includesHealthPlanFormulary"
    },
    "includesHealthPlanNetwork": {
      "@id": "schema:includesHealthPlanNetwork"
    },
    "includesObject": {
      "@id": "schema:includesObject"
    },
    "increasesRiskOf": {
      "@id": "schema:increasesRiskOf"
    },
    "indication": {
      "@id": "schema:indication"
    },
    "industry": {
      "@id": "schema:industry"
    },
    "ineligibleRegion": {
      "@id": "schema:ineligibleRegion"
    },
    "infectiousAgent": {
      "@id": "schema:infectiousAgent"
    },
    "infectiousAgentClass": {
      "@id": "schema:infectiousAgentClass"
    },
    "ingredients": {
      "@id": "schema:ingredients"
    },
    "inker": {
      "@id": "schema:inker"
    },
    "insertion": {
      "@id": "schema:insertion"
    },
    "installUrl": {
      "@id": "schema:installUrl",
      "@type": "@id"
    },
    "instructor": {
      "@id": "schema:instructor"
    },
    "instrument": {
      "@id": "schema:instrument",
      "@type": "@id"
    },
    "intensity": {
      "@id": "schema:intensity"
    },
    "interactingDrug": {
      "@id": "schema:interactingDrug"
    },
    "interactionCount": {
      "@id": "schema:interactionCount"
    },
    "interactionService": {
      "@id": "schema:interactionService"
    },
    "interactionStatistic": {
      "@id": "schema:interactionStatistic"
    },
    "interactionType": {
      "@id": "schema:interactionType"
    },
    "interactivityType": {
      "@id": "schema:interactivityType"
    },
    "interestRate": {
      "@id": "schema:interestRate"
    },
    "inventoryLevel": {
      "@id": "schema:inventoryLevel"
    },
    "inverseOf": {
      "@id": "schema:inverseOf"
    },
    "isAcceptingNewPatients": {
      "@id": "schema:isAcceptingNewPatients"
    },
    "isAccessibleForFree": {
      "@id": "schema:isAccessibleForFree"
    },
    "isAccessoryOrSparePartFor": {
      "@id": "schema:isAccessoryOrSparePartFor"
    },
    "isAvailableGenerically": {
      "@id": "schema:isAvailableGenerically"
    },
    "isBasedOn": {
      "@id": "schema:isBasedOn",
      "@type": "@id",
      "@container": "@set"
    },
    "isBasedOnUrl": {
      "@id": "schema:isBasedOnUrl",
      "@type": "@id",
      "@container": "@set"
    },
    "isConsumableFor": {
      "@id": "schema:isConsumableFor"
    },
    "isFamilyFriendly": {
      "@id": "schema:isFamilyFriendly"
    },
    "isGift": {
      "@id": "schema:isGift"
    },
    "isLiveBroadcast": {
      "@id": "schema:isLiveBroadcast"
    },
    "isPartOf": {
      "@id": "schema:isPartOf",
      "@type": "@id"
    },
    "isProprietary": {
      "@id": "schema:isProprietary"
    },
    "isRelatedTo": {
      "@id": "schema:isRelatedTo"
    },
    "isSimilarTo": {
      "@id": "schema:isSimilarTo"
    },
    "isVariantOf": {
      "@id": "schema:isVariantOf"
    },
    "isbn": {
      "@id": "schema:isbn"
    },
    "isicV4": {
      "@id": "schema:isicV4"
    },
    "isrcCode": {
      "@id": "schema:isrcCode"
    },
    "issn": {
      "@id": "schema:issn"
    },
    "issueNumber": {
      "@id": "schema:issueNumber"
    },
    "issuedBy": {
      "@id": "schema:issuedBy"
    },
    "issuedThrough": {
      "@id": "schema:issuedThrough"
    },
    "iswcCode": {
      "@id": "schema:iswcCode"
    },
    "item": {
      "@id": "schema:item",
      "@type": "@id"
    },
    "itemCondition": {
      "@id": "schema:itemCondition"
    },
    "itemListElement": {
      "@id": "schema:itemListElement",
      "@container": "@set",
      "@type": "@id"
    },
    "itemListOrder": {
      "@id": "schema:itemListOrder"
    },
    "itemOffered": {
      "@id": "schema:itemOffered"
    },
    "itemReviewed": {
      "@id": "schema:itemReviewed"
    },
    "itemShipped": {
      "@id": "schema:itemShipped"
    },
    "jobBenefits": {
      "@id": "schema:jobBenefits"
    },
    "jobLocation": {
      "@id": "schema:jobLocation"
    },
    "jobTitle": {
      "@id": "schema:jobTitle"
    },
    "keywords": {
      "@id": "schema:keywords",
      "@container": "@set"
    },
    "knownVehicleDamages": {
      "@id": "schema:knownVehicleDamages"
    },
    "knows": {
      "@id": "schema:knows"
    },
    "labelDetails": {
      "@id": "schema:labelDetails",
      "@type": "@id"
    },
    "landlord": {
      "@id": "schema:landlord"
    },
    "language": {
      "@id": "schema:language"
    },
    "lastReviewed": {
      "@id": "schema:lastReviewed",
      "@type": "Date"
    },
    "latitude": {
      "@id": "schema:latitude"
    },
    "learningResourceType": {
      "@id": "schema:learningResourceType"
    },
    "legalName": {
      "@id": "schema:legalName"
    },
    "legalStatus": {
      "@id": "schema:legalStatus"
    },
    "leiCode": {
      "@id": "schema:leiCode"
    },
    "lender": {
      "@id": "schema:lender"
    },
    "lesser": {
      "@id": "schema:lesser"
    },
    "lesserOrEqual": {
      "@id": "schema:lesserOrEqual"
    },
    "letterer": {
      "@id": "schema:letterer"
    },
    "line": {
      "@id": "schema:line"
    },
    "linkRelationship": {
      "@id": "schema:linkRelationship"
    },
    "liveBlogUpdate": {
      "@id": "schema:liveBlogUpdate"
    },
    "loanMortgageMandateAmount": {
      "@id": "schema:loanMortgageMandateAmount"
    },
    "loanPaymentAmount": {
      "@id": "schema:loanPaymentAmount"
    },
    "loanPaymentFrequency": {
      "@id": "schema:loanPaymentFrequency"
    },
    "loanRepaymentForm": {
      "@id": "schema:loanRepaymentForm"
    },
    "loanTerm": {
      "@id": "schema:loanTerm"
    },
    "loanType": {
      "@id": "schema:loanType",
      "@type": "@id"
    },
    "location": {
      "@id": "schema:location",
      "@type": "@id"
    },
    "locationCreated": {
      "@id": "schema:locationCreated"
    },
    "lodgingUnitDescription": {
      "@id": "schema:lodgingUnitDescription"
    },
    "lodgingUnitType": {
      "@id": "schema:lodgingUnitType"
    },
    "logo": {
      "@id": "schema:logo",
      "@type": "@id"
    },
    "longitude": {
      "@id": "schema:longitude"
    },
    "loser": {
      "@id": "schema:loser"
    },
    "lowPrice": {
      "@id": "schema:lowPrice"
    },
    "lyricist": {
      "@id": "schema:lyricist"
    },
    "lyrics": {
      "@id": "schema:lyrics"
    },
    "mainContentOfPage": {
      "@id": "schema:mainContentOfPage"
    },
    "mainEntity": {
      "@id": "schema:mainEntity",
      "@type": "@id"
    },
    "mainEntityOfPage": {
      "@id": "schema:mainEntityOfPage",
      "@type": "@id"
    },
    "makesOffer": {
      "@id": "schema:makesOffer"
    },
    "manufacturer": {
      "@id": "schema:manufacturer"
    },
    "map": {
      "@id": "schema:map",
      "@type": "@id"
    },
    "mapType": {
      "@id": "schema:mapType"
    },
    "maps": {
      "@id": "schema:maps",
      "@type": "@id"
    },
    "material": {
      "@id": "schema:material",
      "@type": "@id"
    },
    "maxPrice": {
      "@id": "schema:maxPrice"
    },
    "maxValue": {
      "@id": "schema:maxValue"
    },
    "maximumAttendeeCapacity": {
      "@id": "schema:maximumAttendeeCapacity"
    },
    "maximumIntake": {
      "@id": "schema:maximumIntake"
    },
    "mealService": {
      "@id": "schema:mealService"
    },
    "measurementTechnique": {
      "@id": "schema:measurementTechnique",
      "@type": "@id"
    },
    "mechanismOfAction": {
      "@id": "schema:mechanismOfAction"
    },
    "medicalSpecialty": {
      "@id": "schema:medicalSpecialty"
    },
    "medicineSystem": {
      "@id": "schema:medicineSystem"
    },
    "meetsEmissionStandard": {
      "@id": "schema:meetsEmissionStandard",
      "@type": "@id"
    },
    "member": {
      "@id": "schema:member"
    },
    "memberOf": {
      "@id": "schema:memberOf"
    },
    "members": {
      "@id": "schema:members"
    },
    "membershipNumber": {
      "@id": "schema:membershipNumber"
    },
    "memoryRequirements": {
      "@id": "schema:memoryRequirements",
      "@type": "@id"
    },
    "mentions": {
      "@id": "schema:mentions"
    },
    "menu": {
      "@id": "schema:menu",
      "@type": "@id"
    },
    "menuAddOn": {
      "@id": "schema:menuAddOn"
    },
    "merchant": {
      "@id": "schema:merchant"
    },
    "messageAttachment": {
      "@id": "schema:messageAttachment",
      "@type": "@id"
    },
    "mileageFromOdometer": {
      "@id": "schema:mileageFromOdometer"
    },
    "minPrice": {
      "@id": "schema:minPrice"
    },
    "minValue": {
      "@id": "schema:minValue"
    },
    "minimumPaymentDue": {
      "@id": "schema:minimumPaymentDue"
    },
    "model": {
      "@id": "schema:model"
    },
    "modelDate": {
      "@id": "schema:modelDate",
      "@type": "Date"
    },
    "modifiedTime": {
      "@id": "schema:modifiedTime",
      "@type": "DateTime"
    },
    "monthlyMinimumRepaymentAmount": {
      "@id": "schema:monthlyMinimumRepaymentAmount"
    },
    "mpn": {
      "@id": "schema:mpn"
    },
    "multipleValues": {
      "@id": "schema:multipleValues"
    },
    "muscleAction": {
      "@id": "schema:muscleAction"
    },
    "musicArrangement": {
      "@id": "schema:musicArrangement"
    },
    "musicBy": {
      "@id": "schema:musicBy"
    },
    "musicCompositionForm": {
      "@id": "schema:musicCompositionForm"
    },
    "musicGroupMember": {
      "@id": "schema:musicGroupMember"
    },
    "musicReleaseFormat": {
      "@id": "schema:musicReleaseFormat"
    },
    "musicalKey": {
      "@id": "schema:musicalKey"
    },
    "naics": {
      "@id": "schema:naics"
    },
    "name": {
      "@id": "schema:name"
    },
    "namedPosition": {
      "@id": "schema:namedPosition",
      "@type": "@id"
    },
    "nationality": {
      "@id": "schema:nationality"
    },
    "naturalProgression": {
      "@id": "schema:naturalProgression"
    },
    "nerve": {
      "@id": "schema:nerve"
    },
    "nerveMotor": {
      "@id": "schema:nerveMotor"
    },
    "netWorth": {
      "@id": "schema:netWorth"
    },
    "nextItem": {
      "@id": "schema:nextItem"
    },
    "nonEqual": {
      "@id": "schema:nonEqual"
    },
    "nonProprietaryName": {
      "@id": "schema:nonProprietaryName"
    },
    "normalRange": {
      "@id": "schema:normalRange"
    },
    "numAdults": {
      "@id": "schema:numAdults"
    },
    "numChildren": {
      "@id": "schema:numChildren"
    },
    "numTracks": {
      "@id": "schema:numTracks"
    },
    "numberOfAirbags": {
      "@id": "schema:numberOfAirbags"
    },
    "numberOfAxles": {
      "@id": "schema:numberOfAxles"
    },
    "numberOfBeds": {
      "@id": "schema:numberOfBeds"
    },
    "numberOfDoors": {
      "@id": "schema:numberOfDoors"
    },
    "numberOfEmployees": {
      "@id": "schema:numberOfEmployees"
    },
    "numberOfEpisodes": {
      "@id": "schema:numberOfEpisodes"
    },
    "numberOfForwardGears": {
      "@id": "schema:numberOfForwardGears"
    },
    "numberOfItems": {
      "@id": "schema:numberOfItems"
    },
    "numberOfLoanPayments": {
      "@id": "schema:numberOfLoanPayments"
    },
    "numberOfPages": {
      "@id": "schema:numberOfPages"
    },
    "numberOfPlayers": {
      "@id": "schema:numberOfPlayers"
    },
    "numberOfPreviousOwners": {
      "@id": "schema:numberOfPreviousOwners"
    },
    "numberOfRooms": {
      "@id": "schema:numberOfRooms"
    },
    "numberOfSeasons": {
      "@id": "schema:numberOfSeasons"
    },
    "numberedPosition": {
      "@id": "schema:numberedPosition"
    },
    "nutrition": {
      "@id": "schema:nutrition"
    },
    "object": {
      "@id": "schema:object",
      "@type": "@id"
    },
    "occupancy": {
      "@id": "schema:occupancy"
    },
    "occupationalCategory": {
      "@id": "schema:occupationalCategory"
    },
    "offerCount": {
      "@id": "schema:offerCount"
    },
    "offeredBy": {
      "@id": "schema:offeredBy"
    },
    "offers": {
      "@id": "schema:offers"
    },
    "offersPrescriptionByMail": {
      "@id": "schema:offersPrescriptionByMail"
    },
    "openingHours": {
      "@id": "schema:openingHours"
    },
    "openingHoursSpecification": {
      "@id": "schema:openingHoursSpecification"
    },
    "opens": {
      "@id": "schema:opens"
    },
    "operatingSystem": {
      "@id": "schema:operatingSystem"
    },
    "opponent": {
      "@id": "schema:opponent"
    },
    "option": {
      "@id": "schema:option"
    },
    "orderDate": {
      "@id": "schema:orderDate",
      "@type": "DateTime"
    },
    "orderDelivery": {
      "@id": "schema:orderDelivery"
    },
    "orderItemNumber": {
      "@id": "schema:orderItemNumber"
    },
    "orderItemStatus": {
      "@id": "schema:orderItemStatus"
    },
    "orderNumber": {
      "@id": "schema:orderNumber"
    },
    "orderQuantity": {
      "@id": "schema:orderQuantity"
    },
    "orderStatus": {
      "@id": "schema:orderStatus"
    },
    "orderedItem": {
      "@id": "schema:orderedItem"
    },
    "organizer": {
      "@id": "schema:organizer"
    },
    "origin": {
      "@id": "schema:origin"
    },
    "originAddress": {
      "@id": "schema:originAddress"
    },
    "originatesFrom": {
      "@id": "schema:originatesFrom"
    },
    "outcome": {
      "@id": "schema:outcome"
    },
    "overdosage": {
      "@id": "schema:overdosage"
    },
    "overview": {
      "@id": "schema:overview"
    },
    "ownedFrom": {
      "@id": "schema:ownedFrom",
      "@type": "DateTime"
    },
    "ownedThrough": {
      "@id": "schema:ownedThrough",
      "@type": "DateTime"
    },
    "owns": {
      "@id": "schema:owns"
    },
    "pageEnd": {
      "@id": "schema:pageEnd"
    },
    "pageStart": {
      "@id": "schema:pageStart"
    },
    "pagination": {
      "@id": "schema:pagination"
    },
    "parent": {
      "@id": "schema:parent"
    },
    "parentItem": {
      "@id": "schema:parentItem",
      "@type": "@id"
    },
    "parentOrganization": {
      "@id": "schema:parentOrganization",
      "@type": "@id"
    },
    "parentService": {
      "@id": "schema:parentService"
    },
    "parents": {
      "@id": "schema:parents"
    },
    "partOfEpisode": {
      "@id": "schema:partOfEpisode"
    },
    "partOfInvoice": {
      "@id": "schema:partOfInvoice"
    },
    "partOfOrder": {
      "@id": "schema:partOfOrder"
    },
    "partOfSeason": {
      "@id": "schema:partOfSeason"
    },
    "partOfSeries": {
      "@id": "schema:partOfSeries"
    },
    "partOfSystem": {
      "@id": "schema:partOfSystem"
    },
    "partOfTVSeries": {
      "@id": "schema:partOfTVSeries"
    },
    "participant": {
      "@id": "schema:participant",
      "@container": "@set",
      "@type": "@id"
    },
    "partySize": {
      "@id": "schema:partySize"
    },
    "passengerPriorityStatus": {
      "@id": "schema:passengerPriorityStatus"
    },
    "passengerSequenceNumber": {
      "@id": "schema:passengerSequenceNumber"
    },
    "pathophysiology": {
      "@id": "schema:pathophysiology"
    },
    "payload": {
      "@id": "schema:payload"
    },
    "paymentAccepted": {
      "@id": "schema:paymentAccepted"
    },
    "paymentDue": {
      "@id": "schema:paymentDue",
      "@type": "DateTime"
    },
    "paymentDueDate": {
      "@id": "schema:paymentDueDate",
      "@type": "DateTime"
    },
    "paymentMethod": {
      "@id": "schema:paymentMethod"
    },
    "paymentMethodId": {
      "@id": "schema:paymentMethodId"
    },
    "paymentStatus": {
      "@id": "schema:paymentStatus"
    },
    "paymentUrl": {
      "@id": "schema:paymentUrl",
      "@type": "@id"
    },
    "penciler": {
      "@id": "schema:penciler"
    },
    "performer": {
      "@id": "schema:performer"
    },
    "performerIn": {
      "@id": "schema:performerIn"
    },
    "performers": {
      "@id": "schema:performers"
    },
    "permissionType": {
      "@id": "schema:permissionType"
    },
    "permissions": {
      "@id": "schema:permissions"
    },
    "permitAudience": {
      "@id": "schema:permitAudience"
    },
    "permittedUsage": {
      "@id": "schema:permittedUsage"
    },
    "petsAllowed": {
      "@id": "schema:petsAllowed"
    },
    "phase": {
      "@id": "schema:phase"
    },
    "photo": {
      "@id": "schema:photo"
    },
    "photos": {
      "@id": "schema:photos"
    },
    "physiologicalBenefits": {
      "@id": "schema:physiologicalBenefits"
    },
    "pickupLocation": {
      "@id": "schema:pickupLocation"
    },
    "pickupTime": {
      "@id": "schema:pickupTime",
      "@type": "DateTime"
    },
    "playMode": {
      "@id": "schema:playMode"
    },
    "playerType": {
      "@id": "schema:playerType"
    },
    "playersOnline": {
      "@id": "schema:playersOnline"
    },
    "polygon": {
      "@id": "schema:polygon"
    },
    "population": {
      "@id": "schema:population"
    },
    "position": {
      "@id": "schema:position"
    },
    "possibleComplication": {
      "@id": "schema:possibleComplication"
    },
    "possibleTreatment": {
      "@id": "schema:possibleTreatment"
    },
    "postOfficeBoxNumber": {
      "@id": "schema:postOfficeBoxNumber"
    },
    "postOp": {
      "@id": "schema:postOp"
    },
    "postalCode": {
      "@id": "schema:postalCode"
    },
    "potentialAction": {
      "@id": "schema:potentialAction",
      "@container": "@set",
      "@type": "@id"
    },
    "preOp": {
      "@id": "schema:preOp"
    },
    "predecessorOf": {
      "@id": "schema:predecessorOf"
    },
    "pregnancyCategory": {
      "@id": "schema:pregnancyCategory"
    },
    "pregnancyWarning": {
      "@id": "schema:pregnancyWarning"
    },
    "prepTime": {
      "@id": "schema:prepTime"
    },
    "preparation": {
      "@id": "schema:preparation"
    },
    "prescribingInfo": {
      "@id": "schema:prescribingInfo",
      "@type": "@id"
    },
    "prescriptionStatus": {
      "@id": "schema:prescriptionStatus"
    },
    "previousItem": {
      "@id": "schema:previousItem"
    },
    "previousStartDate": {
      "@id": "schema:previousStartDate",
      "@type": "Date"
    },
    "price": {
      "@id": "schema:price"
    },
    "priceComponent": {
      "@id": "schema:priceComponent"
    },
    "priceCurrency": {
      "@id": "schema:priceCurrency"
    },
    "priceRange": {
      "@id": "schema:priceRange"
    },
    "priceSpecification": {
      "@id": "schema:priceSpecification",
      "@type": "@id"
    },
    "priceType": {
      "@id": "schema:priceType"
    },
    "priceValidUntil": {
      "@id": "schema:priceValidUntil",
      "@type": "Date"
    },
    "primaryImageOfPage": {
      "@id": "schema:primaryImageOfPage"
    },
    "primaryPrevention": {
      "@id": "schema:primaryPrevention"
    },
    "printColumn": {
      "@id": "schema:printColumn"
    },
    "printEdition": {
      "@id": "schema:printEdition"
    },
    "printPage": {
      "@id": "schema:printPage"
    },
    "printSection": {
      "@id": "schema:printSection"
    },
    "procedure": {
      "@id": "schema:procedure"
    },
    "procedureType": {
      "@id": "schema:procedureType"
    },
    "processingTime": {
      "@id": "schema:processingTime"
    },
    "processorRequirements": {
      "@id": "schema:processorRequirements"
    },
    "producer": {
      "@id": "schema:producer",
      "@container": "@list",
      "@type": "@id"
    },
    "produces": {
      "@id": "schema:produces"
    },
    "productID": {
      "@id": "schema:productID"
    },
    "productSupported": {
      "@id": "schema:productSupported"
    },
    "productionCompany": {
      "@id": "schema:productionCompany"
    },
    "productionDate": {
      "@id": "schema:productionDate",
      "@type": "Date"
    },
    "proficiencyLevel": {
      "@id": "schema:proficiencyLevel"
    },
    "programMembershipUsed": {
      "@id": "schema:programMembershipUsed"
    },
    "programName": {
      "@id": "schema:programName"
    },
    "programmingLanguage": {
      "@id": "schema:programmingLanguage"
    },
    "programmingModel": {
      "@id": "schema:programmingModel"
    },
    "propertyID": {
      "@id": "schema:propertyID",
      "@type": "@id"
    },
    "proprietaryName": {
      "@id": "schema:proprietaryName"
    },
    "proteinContent": {
      "@id": "schema:proteinContent"
    },
    "provider": {
      "@id": "schema:provider",
      "@container": "@list",
      "@type": "@id"
    },
    "providerMobility": {
      "@id": "schema:providerMobility"
    },
    "providesBroadcastService": {
      "@id": "schema:providesBroadcastService"
    },
    "providesService": {
      "@id": "schema:providesService"
    },
    "publication": {
      "@id": "schema:publication"
    },
    "publicationType": {
      "@id": "schema:publicationType"
    },
    "publishedBy": {
      "@id": "schema:publishedBy"
    },
    "publishedOn": {
      "@id": "schema:publishedOn"
    },
    "publisher": {
      "@id": "schema:publisher"
    },
    "publisherImprint": {
      "@id": "schema:publisherImprint"
    },
    "publishingPrinciples": {
      "@id": "schema:publishingPrinciples",
      "@type": "@id"
    },
    "purchaseDate": {
      "@id": "schema:purchaseDate",
      "@type": "Date"
    },
    "purpose": {
      "@id": "schema:purpose"
    },
    "qualifications": {
      "@id": "schema:qualifications"
    },
    "query": {
      "@id": "schema:query"
    },
    "quest": {
      "@id": "schema:quest"
    },
    "question": {
      "@id": "https://science.ai/question/",
      "@type": "@id"
    },
    "rangeIncludes": {
      "@id": "schema:rangeIncludes"
    },
    "ratingCount": {
      "@id": "schema:ratingCount"
    },
    "ratingValue": {
      "@id": "schema:ratingValue"
    },
    "readBy": {
      "@id": "schema:readBy"
    },
    "readonlyValue": {
      "@id": "schema:readonlyValue"
    },
    "realEstateAgent": {
      "@id": "schema:realEstateAgent"
    },
    "recipe": {
      "@id": "schema:recipe"
    },
    "recipeCategory": {
      "@id": "schema:recipeCategory"
    },
    "recipeCuisine": {
      "@id": "schema:recipeCuisine"
    },
    "recipeIngredient": {
      "@id": "schema:recipeIngredient"
    },
    "recipeInstructions": {
      "@id": "schema:recipeInstructions"
    },
    "recipeYield": {
      "@id": "schema:recipeYield"
    },
    "recipient": {
      "@id": "schema:recipient",
      "@type": "@id"
    },
    "recognizingAuthority": {
      "@id": "schema:recognizingAuthority"
    },
    "recommendationStrength": {
      "@id": "schema:recommendationStrength"
    },
    "recommendedIntake": {
      "@id": "schema:recommendedIntake"
    },
    "recordLabel": {
      "@id": "schema:recordLabel"
    },
    "recordedAs": {
      "@id": "schema:recordedAs"
    },
    "recordedAt": {
      "@id": "schema:recordedAt"
    },
    "recordedIn": {
      "@id": "schema:recordedIn"
    },
    "recordingOf": {
      "@id": "schema:recordingOf"
    },
    "recourseLoan": {
      "@id": "schema:recourseLoan"
    },
    "referenceQuantity": {
      "@id": "schema:referenceQuantity"
    },
    "referencesOrder": {
      "@id": "schema:referencesOrder"
    },
    "regionDrained": {
      "@id": "schema:regionDrained"
    },
    "regionsAllowed": {
      "@id": "schema:regionsAllowed"
    },
    "relatedAnatomy": {
      "@id": "schema:relatedAnatomy"
    },
    "relatedCondition": {
      "@id": "schema:relatedCondition"
    },
    "relatedDrug": {
      "@id": "schema:relatedDrug"
    },
    "relatedLink": {
      "@id": "schema:relatedLink",
      "@type": "@id"
    },
    "relatedStructure": {
      "@id": "schema:relatedStructure"
    },
    "relatedTherapy": {
      "@id": "schema:relatedTherapy"
    },
    "relatedTo": {
      "@id": "schema:relatedTo"
    },
    "releaseDate": {
      "@id": "schema:releaseDate",
      "@type": "Date"
    },
    "releaseNotes": {
      "@id": "schema:releaseNotes",
      "@type": "@id"
    },
    "releaseOf": {
      "@id": "schema:releaseOf"
    },
    "releasedEvent": {
      "@id": "schema:releasedEvent"
    },
    "relevantSpecialty": {
      "@id": "schema:relevantSpecialty"
    },
    "remainingAttendeeCapacity": {
      "@id": "schema:remainingAttendeeCapacity"
    },
    "renegotiableLoan": {
      "@id": "schema:renegotiableLoan"
    },
    "repetitions": {
      "@id": "schema:repetitions"
    },
    "replacee": {
      "@id": "schema:replacee"
    },
    "replacer": {
      "@id": "schema:replacer"
    },
    "replyToUrl": {
      "@id": "schema:replyToUrl",
      "@type": "@id"
    },
    "reportNumber": {
      "@id": "schema:reportNumber"
    },
    "representativeOfPage": {
      "@id": "schema:representativeOfPage"
    },
    "requiredCollateral": {
      "@id": "schema:requiredCollateral"
    },
    "requiredGender": {
      "@id": "schema:requiredGender"
    },
    "requiredMaxAge": {
      "@id": "schema:requiredMaxAge"
    },
    "requiredMinAge": {
      "@id": "schema:requiredMinAge"
    },
    "requirements": {
      "@id": "schema:requirements",
      "@type": "@id"
    },
    "requiresSubscription": {
      "@id": "schema:requiresSubscription"
    },
    "reservationFor": {
      "@id": "schema:reservationFor"
    },
    "reservationId": {
      "@id": "schema:reservationId"
    },
    "reservationStatus": {
      "@id": "schema:reservationStatus"
    },
    "reservedTicket": {
      "@id": "schema:reservedTicket"
    },
    "responsibilities": {
      "@id": "schema:responsibilities"
    },
    "restPeriods": {
      "@id": "schema:restPeriods"
    },
    "result": {
      "@id": "schema:result",
      "@type": "@id"
    },
    "resultComment": {
      "@id": "schema:resultComment",
      "@type": "@id"
    },
    "resultReview": {
      "@id": "schema:resultReview",
      "@type": "@id"
    },
    "review": {
      "@id": "schema:review",
      "@container": "@set",
      "@type": "@id"
    },
    "reviewBody": {
      "@id": "schema:reviewBody"
    },
    "reviewCount": {
      "@id": "schema:reviewCount"
    },
    "reviewRating": {
      "@id": "schema:reviewRating",
      "@type": "@id"
    },
    "reviewedBy": {
      "@id": "schema:reviewedBy"
    },
    "reviews": {
      "@id": "schema:reviews"
    },
    "riskFactor": {
      "@id": "schema:riskFactor"
    },
    "risks": {
      "@id": "schema:risks"
    },
    "roleName": {
      "@id": "schema:roleName",
      "@type": "@id"
    },
    "roofLoad": {
      "@id": "schema:roofLoad"
    },
    "rsvpResponse": {
      "@id": "schema:rsvpResponse"
    },
    "runsTo": {
      "@id": "schema:runsTo"
    },
    "runtime": {
      "@id": "schema:runtime"
    },
    "runtimePlatform": {
      "@id": "schema:runtimePlatform"
    },
    "rxcui": {
      "@id": "schema:rxcui"
    },
    "safetyConsideration": {
      "@id": "schema:safetyConsideration"
    },
    "salaryCurrency": {
      "@id": "schema:salaryCurrency"
    },
    "sameAs": {
      "@id": "schema:sameAs",
      "@type": "@id",
      "@container": "@set"
    },
    "sampleType": {
      "@id": "schema:sampleType"
    },
    "saturatedFatContent": {
      "@id": "schema:saturatedFatContent"
    },
    "scheduledPaymentDate": {
      "@id": "schema:scheduledPaymentDate",
      "@type": "Date"
    },
    "scheduledTime": {
      "@id": "schema:scheduledTime",
      "@type": "DateTime"
    },
    "schemaVersion": {
      "@id": "schema:schemaVersion",
      "@type": "@id"
    },
    "screenCount": {
      "@id": "schema:screenCount"
    },
    "screenshot": {
      "@id": "schema:screenshot",
      "@type": "@id"
    },
    "season": {
      "@id": "schema:season"
    },
    "seasonNumber": {
      "@id": "schema:seasonNumber"
    },
    "seasons": {
      "@id": "schema:seasons"
    },
    "seatNumber": {
      "@id": "schema:seatNumber"
    },
    "seatRow": {
      "@id": "schema:seatRow"
    },
    "seatSection": {
      "@id": "schema:seatSection"
    },
    "seatingCapacity": {
      "@id": "schema:seatingCapacity"
    },
    "seatingType": {
      "@id": "schema:seatingType"
    },
    "secondaryPrevention": {
      "@id": "schema:secondaryPrevention"
    },
    "securityScreening": {
      "@id": "schema:securityScreening"
    },
    "seeks": {
      "@id": "schema:seeks"
    },
    "seller": {
      "@id": "schema:seller"
    },
    "sender": {
      "@id": "schema:sender",
      "@type": "@id"
    },
    "sensoryUnit": {
      "@id": "schema:sensoryUnit"
    },
    "serialNumber": {
      "@id": "schema:serialNumber"
    },
    "seriousAdverseOutcome": {
      "@id": "schema:seriousAdverseOutcome"
    },
    "serverStatus": {
      "@id": "schema:serverStatus"
    },
    "servesCuisine": {
      "@id": "schema:servesCuisine"
    },
    "serviceArea": {
      "@id": "schema:serviceArea"
    },
    "serviceAudience": {
      "@id": "schema:serviceAudience"
    },
    "serviceLocation": {
      "@id": "schema:serviceLocation"
    },
    "serviceOperator": {
      "@id": "schema:serviceOperator"
    },
    "serviceOutput": {
      "@id": "schema:serviceOutput"
    },
    "servicePhone": {
      "@id": "schema:servicePhone"
    },
    "servicePostalAddress": {
      "@id": "schema:servicePostalAddress"
    },
    "serviceSmsNumber": {
      "@id": "schema:serviceSmsNumber"
    },
    "serviceType": {
      "@id": "schema:serviceType"
    },
    "serviceUrl": {
      "@id": "schema:serviceUrl",
      "@type": "@id"
    },
    "servingSize": {
      "@id": "schema:servingSize"
    },
    "sharedContent": {
      "@id": "schema:sharedContent"
    },
    "sibling": {
      "@id": "schema:sibling"
    },
    "siblings": {
      "@id": "schema:siblings"
    },
    "signDetected": {
      "@id": "schema:signDetected"
    },
    "signOrSymptom": {
      "@id": "schema:signOrSymptom"
    },
    "significance": {
      "@id": "schema:significance"
    },
    "significantLink": {
      "@id": "schema:significantLink",
      "@type": "@id"
    },
    "significantLinks": {
      "@id": "schema:significantLinks",
      "@type": "@id"
    },
    "skills": {
      "@id": "schema:skills"
    },
    "sku": {
      "@id": "schema:sku"
    },
    "smokingAllowed": {
      "@id": "schema:smokingAllowed"
    },
    "sodiumContent": {
      "@id": "schema:sodiumContent"
    },
    "softwareAddOn": {
      "@id": "schema:softwareAddOn"
    },
    "softwareHelp": {
      "@id": "schema:softwareHelp"
    },
    "softwareRequirements": {
      "@id": "schema:softwareRequirements",
      "@type": "@id"
    },
    "softwareVersion": {
      "@id": "schema:softwareVersion"
    },
    "source": {
      "@id": "schema:source"
    },
    "sourceOrganization": {
      "@id": "schema:sourceOrganization"
    },
    "sourcedFrom": {
      "@id": "schema:sourcedFrom"
    },
    "spatial": {
      "@id": "schema:spatial"
    },
    "spatialCoverage": {
      "@id": "schema:spatialCoverage"
    },
    "speakable": {
      "@id": "schema:speakable",
      "@type": "@id"
    },
    "specialCommitments": {
      "@id": "schema:specialCommitments"
    },
    "specialOpeningHoursSpecification": {
      "@id": "schema:specialOpeningHoursSpecification"
    },
    "specialty": {
      "@id": "schema:specialty"
    },
    "speed": {
      "@id": "schema:speed"
    },
    "spokenByCharacter": {
      "@id": "schema:spokenByCharacter"
    },
    "sponsor": {
      "@id": "schema:sponsor",
      "@container": "@set",
      "@type": "@id"
    },
    "sport": {
      "@id": "schema:sport",
      "@type": "@id"
    },
    "sportsActivityLocation": {
      "@id": "schema:sportsActivityLocation"
    },
    "sportsEvent": {
      "@id": "schema:sportsEvent"
    },
    "sportsTeam": {
      "@id": "schema:sportsTeam"
    },
    "spouse": {
      "@id": "schema:spouse"
    },
    "stage": {
      "@id": "schema:stage"
    },
    "stageAsNumber": {
      "@id": "schema:stageAsNumber"
    },
    "starRating": {
      "@id": "schema:starRating"
    },
    "startDate": {
      "@id": "schema:startDate",
      "@type": "Date"
    },
    "startTime": {
      "@id": "schema:startTime",
      "@type": "DateTime"
    },
    "status": {
      "@id": "schema:status"
    },
    "steeringPosition": {
      "@id": "schema:steeringPosition"
    },
    "stepValue": {
      "@id": "schema:stepValue"
    },
    "storageRequirements": {
      "@id": "schema:storageRequirements",
      "@type": "@id"
    },
    "streetAddress": {
      "@id": "schema:streetAddress"
    },
    "strengthUnit": {
      "@id": "schema:strengthUnit"
    },
    "strengthValue": {
      "@id": "schema:strengthValue"
    },
    "structuralClass": {
      "@id": "schema:structuralClass"
    },
    "study": {
      "@id": "schema:study"
    },
    "studyDesign": {
      "@id": "schema:studyDesign"
    },
    "studyLocation": {
      "@id": "schema:studyLocation"
    },
    "studySubject": {
      "@id": "schema:studySubject"
    },
    "stupidProperty": {
      "@id": "schema:stupidProperty"
    },
    "subEvent": {
      "@id": "schema:subEvent"
    },
    "subEvents": {
      "@id": "schema:subEvents"
    },
    "subOrganization": {
      "@id": "schema:subOrganization"
    },
    "subReservation": {
      "@id": "schema:subReservation"
    },
    "subStageSuffix": {
      "@id": "schema:subStageSuffix"
    },
    "subStructure": {
      "@id": "schema:subStructure"
    },
    "subTest": {
      "@id": "schema:subTest"
    },
    "subtitleLanguage": {
      "@id": "schema:subtitleLanguage"
    },
    "subtype": {
      "@id": "schema:subtype"
    },
    "successorOf": {
      "@id": "schema:successorOf"
    },
    "sugarContent": {
      "@id": "schema:sugarContent"
    },
    "suggestedAnswer": {
      "@id": "schema:suggestedAnswer",
      "@type": "@id"
    },
    "suggestedGender": {
      "@id": "schema:suggestedGender"
    },
    "suggestedMaxAge": {
      "@id": "schema:suggestedMaxAge"
    },
    "suggestedMinAge": {
      "@id": "schema:suggestedMinAge"
    },
    "suitableForDiet": {
      "@id": "schema:suitableForDiet"
    },
    "superEvent": {
      "@id": "schema:superEvent"
    },
    "supersededBy": {
      "@id": "schema:supersededBy"
    },
    "supplyTo": {
      "@id": "schema:supplyTo"
    },
    "supportingData": {
      "@id": "schema:supportingData"
    },
    "surface": {
      "@id": "schema:surface",
      "@type": "@id"
    },
    "target": {
      "@id": "schema:target"
    },
    "targetCollection": {
      "@id": "schema:targetCollection",
      "@type": "@id"
    },
    "targetDescription": {
      "@id": "schema:targetDescription"
    },
    "targetName": {
      "@id": "schema:targetName"
    },
    "targetPlatform": {
      "@id": "schema:targetPlatform"
    },
    "targetPopulation": {
      "@id": "schema:targetPopulation"
    },
    "targetProduct": {
      "@id": "schema:targetProduct"
    },
    "targetUrl": {
      "@id": "schema:targetUrl",
      "@type": "@id"
    },
    "taxID": {
      "@id": "schema:taxID"
    },
    "telephone": {
      "@id": "schema:telephone"
    },
    "temporal": {
      "@id": "schema:temporal",
      "@type": "DateTime"
    },
    "temporalCoverage": {
      "@id": "schema:temporalCoverage",
      "@type": "@id"
    },
    "termsOfService": {
      "@id": "schema:termsOfService",
      "@type": "@id"
    },
    "text": {
      "@id": "schema:text"
    },
    "thumbnail": {
      "@id": "schema:thumbnail",
      "@container": "@set",
      "@type": "@id"
    },
    "thumbnailUrl": {
      "@id": "schema:thumbnailUrl",
      "@type": "@id"
    },
    "tickerSymbol": {
      "@id": "schema:tickerSymbol"
    },
    "ticketNumber": {
      "@id": "schema:ticketNumber"
    },
    "ticketToken": {
      "@id": "schema:ticketToken",
      "@type": "@id"
    },
    "ticketedSeat": {
      "@id": "schema:ticketedSeat"
    },
    "timeRequired": {
      "@id": "schema:timeRequired"
    },
    "tissueSample": {
      "@id": "schema:tissueSample"
    },
    "title": {
      "@id": "schema:title"
    },
    "toLocation": {
      "@id": "schema:toLocation"
    },
    "tongueWeight": {
      "@id": "schema:tongueWeight"
    },
    "torque": {
      "@id": "schema:torque"
    },
    "totalPaymentDue": {
      "@id": "schema:totalPaymentDue"
    },
    "totalPrice": {
      "@id": "schema:totalPrice"
    },
    "totalTime": {
      "@id": "schema:totalTime"
    },
    "track": {
      "@id": "schema:track"
    },
    "trackingNumber": {
      "@id": "schema:trackingNumber"
    },
    "trackingUrl": {
      "@id": "schema:trackingUrl",
      "@type": "@id"
    },
    "tracks": {
      "@id": "schema:tracks"
    },
    "trailer": {
      "@id": "schema:trailer"
    },
    "trailerWeight": {
      "@id": "schema:trailerWeight"
    },
    "trainName": {
      "@id": "schema:trainName"
    },
    "trainNumber": {
      "@id": "schema:trainNumber"
    },
    "transFatContent": {
      "@id": "schema:transFatContent"
    },
    "transcript": {
      "@id": "schema:transcript"
    },
    "translationOfWork": {
      "@id": "schema:translationOfWork"
    },
    "translator": {
      "@id": "schema:translator"
    },
    "transmissionMethod": {
      "@id": "schema:transmissionMethod"
    },
    "trialDesign": {
      "@id": "schema:trialDesign"
    },
    "tributary": {
      "@id": "schema:tributary"
    },
    "typeOfBed": {
      "@id": "schema:typeOfBed"
    },
    "typeOfGood": {
      "@id": "schema:typeOfGood"
    },
    "typicalAgeRange": {
      "@id": "schema:typicalAgeRange"
    },
    "typicalTest": {
      "@id": "schema:typicalTest"
    },
    "underName": {
      "@id": "schema:underName"
    },
    "unitCode": {
      "@id": "schema:unitCode",
      "@type": "@id"
    },
    "unitText": {
      "@id": "schema:unitText"
    },
    "unsaturatedFatContent": {
      "@id": "schema:unsaturatedFatContent"
    },
    "uploadDate": {
      "@id": "schema:uploadDate",
      "@type": "Date"
    },
    "upvoteCount": {
      "@id": "schema:upvoteCount"
    },
    "url": {
      "@id": "schema:url",
      "@type": "@id"
    },
    "urlTemplate": {
      "@id": "schema:urlTemplate"
    },
    "usedToDiagnose": {
      "@id": "schema:usedToDiagnose"
    },
    "userInteractionCount": {
      "@id": "schema:userInteractionCount"
    },
    "usesDevice": {
      "@id": "schema:usesDevice"
    },
    "usesHealthPlanIdStandard": {
      "@id": "schema:usesHealthPlanIdStandard",
      "@type": "@id"
    },
    "validFor": {
      "@id": "schema:validFor"
    },
    "validFrom": {
      "@id": "schema:validFrom",
      "@type": "DateTime"
    },
    "validIn": {
      "@id": "schema:validIn"
    },
    "validThrough": {
      "@id": "schema:validThrough",
      "@type": "DateTime"
    },
    "validUntil": {
      "@id": "schema:validUntil",
      "@type": "Date"
    },
    "value": {
      "@id": "schema:value"
    },
    "valueAddedTaxIncluded": {
      "@id": "schema:valueAddedTaxIncluded"
    },
    "valueMaxLength": {
      "@id": "schema:valueMaxLength"
    },
    "valueMinLength": {
      "@id": "schema:valueMinLength"
    },
    "valueName": {
      "@id": "schema:valueName"
    },
    "valuePattern": {
      "@id": "schema:valuePattern"
    },
    "valueReference": {
      "@id": "schema:valueReference"
    },
    "valueRequired": {
      "@id": "schema:valueRequired"
    },
    "variableMeasured": {
      "@id": "schema:variableMeasured"
    },
    "variablesMeasured": {
      "@id": "schema:variablesMeasured"
    },
    "variantCover": {
      "@id": "schema:variantCover"
    },
    "vatID": {
      "@id": "schema:vatID"
    },
    "vehicleConfiguration": {
      "@id": "schema:vehicleConfiguration"
    },
    "vehicleEngine": {
      "@id": "schema:vehicleEngine"
    },
    "vehicleIdentificationNumber": {
      "@id": "schema:vehicleIdentificationNumber"
    },
    "vehicleInteriorColor": {
      "@id": "schema:vehicleInteriorColor"
    },
    "vehicleInteriorType": {
      "@id": "schema:vehicleInteriorType"
    },
    "vehicleModelDate": {
      "@id": "schema:vehicleModelDate",
      "@type": "Date"
    },
    "vehicleSeatingCapacity": {
      "@id": "schema:vehicleSeatingCapacity"
    },
    "vehicleSpecialUsage": {
      "@id": "schema:vehicleSpecialUsage"
    },
    "vehicleTransmission": {
      "@id": "schema:vehicleTransmission",
      "@type": "@id"
    },
    "vendor": {
      "@id": "schema:vendor"
    },
    "version": {
      "@id": "schema:version"
    },
    "video": {
      "@id": "schema:video"
    },
    "videoFormat": {
      "@id": "schema:videoFormat"
    },
    "videoFrameSize": {
      "@id": "schema:videoFrameSize"
    },
    "videoQuality": {
      "@id": "schema:videoQuality"
    },
    "volumeNumber": {
      "@id": "schema:volumeNumber"
    },
    "warning": {
      "@id": "schema:warning",
      "@type": "@id"
    },
    "warranty": {
      "@id": "schema:warranty"
    },
    "warrantyPromise": {
      "@id": "schema:warrantyPromise"
    },
    "warrantyScope": {
      "@id": "schema:warrantyScope"
    },
    "webCheckinTime": {
      "@id": "schema:webCheckinTime",
      "@type": "DateTime"
    },
    "weight": {
      "@id": "schema:weight"
    },
    "weightTotal": {
      "@id": "schema:weightTotal"
    },
    "wheelbase": {
      "@id": "schema:wheelbase"
    },
    "width": {
      "@id": "schema:width"
    },
    "winner": {
      "@id": "schema:winner"
    },
    "wordCount": {
      "@id": "schema:wordCount"
    },
    "workExample": {
      "@id": "schema:workExample"
    },
    "workFeatured": {
      "@id": "schema:workFeatured"
    },
    "workHours": {
      "@id": "schema:workHours"
    },
    "workLocation": {
      "@id": "schema:workLocation"
    },
    "workPerformed": {
      "@id": "schema:workPerformed"
    },
    "workPresented": {
      "@id": "schema:workPresented"
    },
    "workTranslation": {
      "@id": "schema:workTranslation"
    },
    "workload": {
      "@id": "schema:workload"
    },
    "worksFor": {
      "@id": "schema:worksFor"
    },
    "worstRating": {
      "@id": "schema:worstRating"
    },
    "xpath": {
      "@id": "schema:xpath"
    },
    "yearlyRevenue": {
      "@id": "schema:yearlyRevenue"
    },
    "yearsInOperation": {
      "@id": "schema:yearsInOperation"
    },
    "sa": "http://ns.science.ai#",
    "user": "https://science.ai/user/",
    "bot": "https://science.ai/bot/",
    "tmp": "https://science.ai/tmp/",
    "seq": "https://science.ai/seq/",
    "spdx": "https://spdx.org/licenses/",
    "service": "https://science.ai/service/",
    "workflow": "https://science.ai/workflow/",
    "answer": "https://science.ai/answer/",
    "style": {
      "@id": "http://ns.science.ai#style",
      "@type": "@id",
      "@container": "@set"
    },
    "scienceai": "https://science.ai/",
    "ses": "https://api.scienceai/ses/",
    "suggestedResult": {
      "@id": "http://ns.science.ai#suggestedResult",
      "@type": "@id"
    },
    "hasSelector": {
      "@id": "http://ns.science.ai#hasSelector",
      "@type": "@id"
    },
    "itemListFacet": {
      "@id": "http://ns.science.ai#itemListFacet",
      "@type": "@id"
    },
    "targetProductOf": {
      "@reverse": "http://schema.org/targetProduct",
      "@type": "@id"
    },
    "Unspecified": "http://ns.science.ai#Unspecified",
    "Abstract": "http://ns.science.ai#Abstract",
    "Authors": "http://ns.science.ai#Authors",
    "Contributors": "http://ns.science.ai#Contributors",
    "Affiliations": "http://ns.science.ai#Affiliations",
    "Introduction": "http://ns.science.ai#Introduction",
    "MaterialsAndMethods": "http://ns.science.ai#MaterialsAndMethods",
    "Notes": "http://ns.science.ai#Notes",
    "License": "http://ns.science.ai#License",
    "Results": "http://ns.science.ai#Results",
    "Discussion": "http://ns.science.ai#Discussion",
    "Conclusion": "http://ns.science.ai#Conclusion",
    "Acknowledgements": "http://ns.science.ai#Acknowledgements",
    "Copyright": "http://ns.science.ai#Copyright",
    "Disclosure": "http://ns.science.ai#Disclosure",
    "Funding": "http://ns.science.ai#Funding",
    "Keywords": "http://ns.science.ai#Keywords",
    "SupportingInformation": "http://ns.science.ai#SupportingInformation",
    "ReferenceList": "http://ns.science.ai#ReferenceList",
    "Reference": "http://ns.science.ai#Reference",
    "Formula": "http://ns.science.ai#Formula",
    "FormulaObject": "http://ns.science.ai#FormulaObject",
    "SoftwareSourceCodeObject": "http://ns.science.ai#SoftwareSourceCodeObject",
    "Image": "http://ns.science.ai#Image",
    "Video": "http://ns.science.ai#Video",
    "Audio": "http://ns.science.ai#Audio",
    "TableObject": "http://ns.science.ai#TableObject",
    "DocumentObject": "http://ns.science.ai#DocumentObject",
    "Footnote": "http://ns.science.ai#Footnote",
    "resourceOf": {
      "@id": "http://ns.science.ai#resourceOf"
    },
    "Checksum": "http://ns.science.ai#Checksum",
    "PerceptualHash": "http://ns.science.ai#PerceptualHash",
    "contentChecksum": {
      "@id": "http://ns.science.ai#contentChecksum",
      "@type": "@id",
      "@container": "@set"
    },
    "checksumAlgorithm": {
      "@id": "http://ns.science.ai#checksumAlgorithm",
      "@type": "xsd:string"
    },
    "checksumValue": {
      "@id": "http://ns.science.ai#checksumValue",
      "@type": "xsd:string"
    },
    "ProgressEvent": "http://ns.science.ai#ProgressEvent",
    "progress": {
      "@id": "http://ns.science.ai#progress",
      "@type": "@id"
    },
    "AdminPermission": "http://ns.science.ai#AdminPermission",
    "ReadReviewPermission": "http://ns.science.ai#ReadReviewPermission",
    "WriteReviewPermission": "http://ns.science.ai#WriteReviewPermission",
    "ReadCommentPermission": "http://ns.science.ai#ReadCommentPermission",
    "WriteCommentPermission": "http://ns.science.ai#WriteCommentPermission",
    "AssessPermission": "http://ns.science.ai#AssessPermission",
    "CommunicatePermission": "http://ns.science.ai#CommunicatePermission",
    "InvitePermission": "http://ns.science.ai#InvitePermission",
    "CreateReleasePermission": "http://ns.science.ai#CreateReleasePermission",
    "ViewIdentityPermission": "http://ns.science.ai#ViewIdentityPermission",
    "AssignPermission": "http://ns.science.ai#AssignPermission",
    "numberOfRequiredReviews": {
      "@id": "http://ns.science.ai#numberOfRequiredReviews",
      "@type": "schema:Number"
    },
    "numberOfRequiredInstances": {
      "@id": "http://ns.science.ai#numberOfRequiredInstances",
      "@type": "schema:Number"
    },
    "Error": "http://ns.science.ai#Error",
    "statusCode": {
      "@id": "http://ns.science.ai#statusCode",
      "@type": "@id"
    },
    "doi": {
      "@id": "http://ns.science.ai#doi",
      "@type": "@id"
    },
    "Selector": "http://ns.science.ai#Selector",
    "selectionContent": {
      "@id": "http://ns.science.ai#selectionContent",
      "@type": "schema:Text"
    },
    "selectionHash": {
      "@id": "http://ns.science.ai#selectionHash",
      "@type": "schema:Text"
    },
    "NodeSelector": "http://ns.science.ai#NodeSelector",
    "nodeKey": {
      "@id": "http://ns.science.ai#nodeKey",
      "@type": "schema:Text"
    },
    "nodeId": {
      "@id": "http://ns.science.ai#nodeId",
      "@type": "schema:Text"
    },
    "nodeValueId": {
      "@id": "http://ns.science.ai#nodeValueId",
      "@type": "schema:Text"
    },
    "WebVerseSelector": "http://ns.science.ai#WebVerseSelector",
    "webVerseKey": {
      "@id": "http://ns.science.ai#webVerseKey",
      "@type": "schema:Text"
    },
    "webVerseHash": {
      "@id": "http://ns.science.ai#webVerseHash",
      "@type": "schema:Text"
    },
    "webVerseId": {
      "@id": "http://ns.science.ai#webVerseId",
      "@type": "schema:Text"
    },
    "startOffset": {
      "@id": "http://ns.science.ai#startOffset",
      "@type": "schema:Number"
    },
    "endOffset": {
      "@id": "http://ns.science.ai#endOffset",
      "@type": "schema:Number"
    },
    "TargetRole": "http://ns.science.ai#TargetRole",
    "LinkAction": "http://ns.science.ai#LinkAction",
    "TagAction": "http://ns.science.ai#TagAction",
    "DeauthorizeAction": "http://ns.science.ai#DeauthorizeAction",
    "PaySeriesAction": "http://ns.science.ai#PaySeriesAction",
    "CreateOrganizationAction": "http://ns.science.ai#CreateOrganizationAction",
    "UpdateOrganizationAction": "http://ns.science.ai#UpdateOrganizationAction",
    "AuthorizePaymentAction": "http://ns.science.ai#AuthorizePaymentAction",
    "ConsumePlanAction": "http://ns.science.ai#ConsumePlanAction",
    "TypesettingAction": "http://ns.science.ai#TypesettingAction",
    "Graph": "http://ns.science.ai#Graph",
    "slug": {
      "@id": "http://ns.science.ai#slug",
      "@type": "schema:Text"
    },
    "ContributorRole": "http://ns.science.ai#ContributorRole",
    "roleAffiliation": {
      "@id": "http://ns.science.ai#roleAffiliation",
      "@type": "@id",
      "@container": "@list"
    },
    "roleContactPoint": {
      "@id": "http://ns.science.ai#roleContactPoint",
      "@type": "@id",
      "@container": "@set"
    },
    "permissionScope": {
      "@id": "http://ns.science.ai#permissionScope",
      "@type": "@id",
      "@container": "@set"
    },
    "SponsorRole": "http://ns.science.ai#SponsorRole",
    "FunderRole": "http://ns.science.ai#FunderRole",
    "roleOffer": {
      "@id": "http://ns.science.ai#roleOffer",
      "@type": "@id",
      "@container": "@set"
    },
    "FundingSource": "http://ns.science.ai#FundingSource",
    "roleAction": {
      "@id": "http://ns.science.ai#roleAction",
      "@type": "@id",
      "@container": "@set"
    },
    "DisclosureAction": "http://ns.science.ai#DisclosureAction",
    "AcknowledgeAction": "http://ns.science.ai#AcknowledgeAction",
    "UploadAction": "http://ns.science.ai#UploadAction",
    "CreateGraphAction": "http://ns.science.ai#CreateGraphAction",
    "CreateWorkflowStageAction": "http://ns.science.ai#CreateWorkflowStageAction",
    "UpdateGraphAction": "http://ns.science.ai#UpdateGraphAction",
    "DeleteGraphAction": "http://ns.science.ai#DeleteGraphAction",
    "CreateUserProfileAction": "http://ns.science.ai#CreateUserProfileAction",
    "UpdateUserProfileAction": "http://ns.science.ai#UpdateUserProfileAction",
    "CreateReleaseAction": "http://ns.science.ai#CreateReleaseAction",
    "UpdateReleaseAction": "http://ns.science.ai#UpdateReleaseAction",
    "CreatePeriodicalAction": "http://ns.science.ai#CreatePeriodicalAction",
    "UpdatePeriodicalAction": "http://ns.science.ai#UpdatePeriodicalAction",
    "CreateOfferAction": "http://ns.science.ai#CreateOfferAction",
    "MimeDetectionAction": "http://ns.science.ai#MimeDetectionAction",
    "ImageProcessingAction": "http://ns.science.ai#ImageProcessingAction",
    "AudioVideoProcessingAction": "http://ns.science.ai#AudioVideoProcessingAction",
    "RdfaConversionAction": "http://ns.science.ai#RdfaConversionAction",
    "SemanticTaggingAction": "http://ns.science.ai#SemanticTaggingAction",
    "Tag": "http://ns.science.ai#Tag",
    "Facet": "http://ns.science.ai#Facet",
    "RangeFacet": "http://ns.science.ai#RangeFacet",
    "count": {
      "@id": "http://ns.science.ai#count",
      "@type": "@id"
    },
    "expectedDuration": {
      "@id": "http://ns.science.ai#expectedDuration",
      "@type": "@id"
    },
    "resultOf": {
      "@id": "http://ns.science.ai#resultOf",
      "@type": "@id"
    },
    "CssVariable": "http://ns.science.ai#CssVariable",
    "encodesStyle": {
      "@id": "http://ns.science.ai#encodesStyle",
      "@type": "@id"
    },
    "isStyleOf": {
      "@id": "http://ns.science.ai#isStyleOf",
      "@type": "@id"
    }
  }
};
},{}],2:[function(require,module,exports){
var jsonldMarkup = require('jsonld-markup');
var jsonldVis = require('jsonld-vis');
var context = require('../context');

document.addEventListener('DOMContentLoaded', function() {
  var $code = document.querySelector('#example-jsonld code');
  var data = JSON.parse($code.textContent.trim());

  jsonldVis(data, '#viz', {
    w: 600,
    h: 800,
    maxLabelWidth: 240,
    transitionDuration: 450,
    scalingFactor: 10
  });

  $code.innerHTML = jsonldMarkup(data, context['@context']);

  var $a = document.querySelector('a[href="#example-jsonld"]');
  $a.addEventListener('click', function(e) {
    e.preventDefault();
    $code.parentElement.classList.toggle('hidden');
  });
});

},{"../context":1,"jsonld-markup":3,"jsonld-vis":4}],3:[function(require,module,exports){
// json to html conversion is adapted from https://github.com/mafintosh/json-markup

(function() {

  function jsonldMarkup(doc, ctx, opts) {
    ctx = ctx || {};
    opts = opts || {};

    var INDENT = new Array(opts.indent || 2).join(' ');

    var indent = '';

    function forEach(list, start, end, fn, _key) {
      if (!list.length) return start + ' ' + end;

      var out = start + '\n';

      indent += INDENT;
      list.forEach(function(key, i) {
        out += indent + fn(key, _key) + (i < list.length-1 ? ',' : '') + '\n';
      });
      indent = indent.slice(0, -INDENT.length);

      return out + indent + end;
    };

    function visit(obj, _key) {
      if (obj === undefined) return '';

      switch (type(obj)) {
        case 'boolean':
          return '<span class="jsonld-markup-bool">' + obj + '</span>';

        case 'number':
          return '<span class="jsonld-markup-number">' + obj + '</span>';

        case 'null':
          return '<span class="jsonld-markup-null">null</span>';

        case 'string':
          var href;
          if (_key && ((_key === '@type') || (_key === '@id') || (_key in ctx && ((ctx[_key] === '@id') || (ctx[_key]['@type'] === '@id'))))) {
            if (isUrl(obj)) {
              href = obj;
            } else if (obj in ctx) {
              href = iri2url(ctx[obj]['@id'] || ctx[obj], ctx);
            } else if (~obj.indexOf(':') && (obj.split(':')[0] in ctx)) {
              var splt = obj.split(':');
              href = (ctx[splt[0]]['@id'] || ctx[splt[0]]) + splt.slice(1).join(':');
            } else if (_key === '@type' && ctx['@vocab']) {
              href = ctx['@vocab'] + obj;
            } else if (ctx['@base']) {
              href = ctx['@base'] + obj;
            }
          }

          var mvalue;
          if (href) {
            mvalue = '<a href="' + href + '" target="_blank">' + obj + '</a>';
          } else {
            mvalue = escape(
              obj.replace(/\n/g, '\n' + indent)
                  .replace(/([\u0000-\u001f])/g, function (_, c) {
                    return '\\u' + pad(c.codePointAt(0).toString(16));
                  })
            );
          }

          return '<span class="jsonld-markup-string">"' + mvalue + '"</span>';

        case 'link':
          return '<span class="jsonld-markup-string">"<a href="' + escape(obj)+'" target="_blank">'+escape(obj) + '</a>"</span>';

        case 'array':
          var isList = _key && (_key in ctx && ctx[_key]['@container'] === '@list');
          var openBracket = '<span class="jsonld-markup-' + (isList ? 'list': 'set') + '">[</span>'
          var closeBracket = '<span class="jsonld-markup-' + (isList ? 'list': 'set') + '">]</span>'
          return forEach(obj, openBracket, closeBracket, visit, _key);

        case 'object':
          var keys = Object.keys(obj).filter(function(key) {
            return obj[key] !== undefined;
          });

          return forEach(keys, '{', '}', function(key) {
            var href, isKeywordMapping;
            if (key in ctx) {
              if (ctx[key]['@id']) {
                href = iri2url(ctx[key]['@id'], ctx);
              } else {
                // we protect ourselves from case where ctx[key] is for instance {"@container": "@list"}
                if (typeof ctx[key] === 'object') {
                  if (ctx['@vocab']) {
                    href = ctx['@vocab'] + key;
                  }
                } else {
                  if (ctx[key].charAt(0) === '@') {
                    // keyword mapping e.g id -> @id
                    isKeywordMapping = ctx[key];
                  } else {
                    href = iri2url(ctx[key], ctx);
                  }
                }
              }
            } else if (isUrl(key)) {
              href = key;
            } else if (~key.indexOf(':') && (key.split(':')[0] in ctx)) {
              var splt = key.split(':');
              href = (ctx[splt[0]]['@id'] || ctx[splt[0]]) + splt.slice(1).join(':');
            } else if (ctx['@vocab'] && key.charAt(0) !== '@') {
              href = ctx['@vocab'] + key;
            }

            if (isKeywordMapping) {
              return '<span class="jsonld-markup-key-' + isKeywordMapping.slice(1) + '">"'+ '<abbr title="' + isKeywordMapping + '">' + key  + '</abbr>":</span> ' + visit(obj[key], key);
            } else {
              var mkey;
              if (href) {
                mkey = '<a href="' + href + '" target="_blank">' + key + '</a>';
              } else {
                mkey = key;
              }
              return '"<span class="jsonld-markup-key' + ((key.charAt(0) === '@')? ('-' + key.slice(1)) : '' ) + '">'+ mkey + '</span>": ' + visit(obj[key], key);
            }
          });
      }

      return '';
    };

    return '<div class="jsonld-markup">' + visit(doc) + '</div>';
  };

  function isUrl(str) {
    return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);
  }

  function iri2url(iri, ctx) {
    if (isUrl(iri)) {
      return iri;
    } else {
      var irisplt = iri.split(':');
      if (irisplt.length > 1 && (irisplt[0] in ctx)) {
        return (ctx[irisplt[0]]['@id'] || ctx[irisplt[0]]) + irisplt.slice(1).join(':');
      }
    }
  }

  function type(obj) {
    if (obj === null) return 'null';
    if (Array.isArray(obj)) return 'array';
    if (typeof obj === 'string' && isUrl(obj)) return 'link';

    return typeof obj;
  };

  function escape(str) {
    return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  };

  function pad (str) {
    for (var i = str.length; i < 4; i++) str = '0' + str;
    return str;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsonldMarkup;
  } else {
    window.jsonldMarkup = jsonldMarkup;
  }

})();

},{}],4:[function(require,module,exports){
(function() {
  'use strict';

  function jsonldVis(jsonld, selector, config) {
    if (!arguments.length) return jsonldVis;
    config = config || {};

    var h = config.h || 600
      , w = config.w || 800
      , maxLabelWidth = config.maxLabelWidth || 250
      , transitionDuration = config.transitionDuration || 750
      , transitionEase = config.transitionEase || 'cubic-in-out'
      , minRadius = config.minRadius || 5
      , scalingFactor = config.scalingFactor || 2;

    var i = 0;

    var tree = d3.layout.tree()
      .size([h, w]);

    var diagonal = d3.svg.diagonal()
      .projection(function(d) { return [d.y, d.x]; });

    var svg = d3.select(selector).append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g')
      .attr('transform', 'translate(' + maxLabelWidth + ',0)');

    var tip = d3.tip()
      .direction(function(d) {
        return d.children || d._children ? 'w' : 'e';
      })
      .offset(function(d) {
        return d.children || d._children ? [0, -3] : [0, 3];
      })
      .attr('class', 'd3-tip')
      .html(function(d) {
        return '<span>' + d.valueExtended + '</span>';
      });

    svg.call(tip);

    var root = jsonldTree(jsonld);
    root.x0 = h / 2;
    root.y0 = 0;
    root.children.forEach(collapse);

    function changeSVGWidth(newWidth) {
      if (w !== newWidth) {
        d3.select(selector + ' > svg').attr('width', newWidth);
      }
    }

    function jsonldTree(source) {
      var tree = {};

      if ('@id' in source) {
        tree.isIdNode = true;
        tree.name = source['@id'];
        if (tree.name.length > maxLabelWidth / 9) {
          tree.valueExtended = tree.name;
          tree.name = '...' + tree.valueExtended.slice(-Math.floor(maxLabelWidth / 9));
        }
      } else {
        tree.isIdNode = true;
        tree.isBlankNode = true;
        // random id, can replace with actual uuid generator if needed
        tree.name = '_' + Math.random().toString(10).slice(-7);
      }

      var children = [];
      Object.keys(source).forEach(function(key) {
        if (key === '@id' || key === '@context' || source[key] === null) return;

        var valueExtended, value;
        if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
          children.push({
            name: key,
            children: [jsonldTree(source[key])]
          });
        } else if (Array.isArray(source[key])) {
          children.push({
            name: key,
            children: source[key].map(function(item) {
              if (typeof item === 'object') {
                return jsonldTree(item);
              } else {
                return { name: item };
              }
            })
          });
        } else {
          valueExtended = source[key];
          value = valueExtended;
          if (value.length > maxLabelWidth / 9) {
            value = value.slice(0, Math.floor(maxLabelWidth / 9)) + '...';
            children.push({
              name: key,
              value: value,
              valueExtended: valueExtended
            });
          } else {
            children.push({
              name: key,
              value: value
            });
          }
        }
      });

      if (children.length) {
        tree.children = children;
      }

      return tree;
    }

    function update(source) {
      var nodes = tree.nodes(root).reverse();
      var links = tree.links(nodes);

      nodes.forEach(function(d) { d.y = d.depth * maxLabelWidth; });

      var node = svg.selectAll('g.node')
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

      var nodeEnter = node.enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', function(d) { return 'translate(' + source.y0 + ',' + source.x0 + ')'; })
        .on('click', click);

      nodeEnter.append('circle')
        .attr('r', 0)
        .style('stroke-width', function(d) {
          return d.isIdNode ? '2px' : '1px';
        })
        .style('stroke', function(d) {
          return d.isIdNode ? '#F7CA18' : '#4ECDC4';
        })
        .style('fill', function(d) {
          if (d.isIdNode) {
            return d._children ? '#F5D76E' : 'white';
          } else {
            return d._children ? '#86E2D5' : 'white';
          }
        })
        .on('mouseover', function(d) { if (d.valueExtended) tip.show(d); })
        .on('mouseout', tip.hide);

      nodeEnter.append('text')
        .attr('x', function(d) {
          var spacing = computeRadius(d) + 5;
          return d.children || d._children ? -spacing : spacing;
        })
        .attr('dy', '4')
        .attr('text-anchor', function(d) { return d.children || d._children ? 'end' : 'start'; })
        .text(function(d) { return d.name + (d.value ? ': ' + d.value : ''); })
        .style('fill-opacity', 0);

      var maxSpan = Math.max.apply(Math, nodes.map(function(d) { return d.y + maxLabelWidth; }));
      if (maxSpan + maxLabelWidth + 20 > w) {
        changeSVGWidth(maxSpan + maxLabelWidth);
        d3.select(selector).node().scrollLeft = source.y0;
      }

      var nodeUpdate = node.transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('transform', function(d) { return 'translate(' + d.y + ',' + d.x + ')'; });

      nodeUpdate.select('circle')
        .attr('r', function(d) { return computeRadius(d); })
        .style('stroke-width', function(d) {
          return d.isIdNode ? '2px' : '1px';
        })
        .style('stroke', function(d) {
          return d.isIdNode ? '#F7CA18' : '#4ECDC4';
        })
        .style('fill', function(d) {
          if (d.isIdNode) {
            return d._children ? '#F5D76E' : 'white';
          } else {
            return d._children ? '#86E2D5' : 'white';
          }
        });

      nodeUpdate.select('text').style('fill-opacity', 1);

      var nodeExit = node.exit().transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('transform', function(d) { return 'translate(' + source.y + ',' + source.x + ')'; })
        .remove();

      nodeExit.select('circle').attr('r', 0);
      nodeExit.select('text').style('fill-opacity', 0);

      var link = svg.selectAll('path.link')
        .data(links, function(d) { return d.target.id; });

      link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', function(d) {
          var o = { x: source.x0, y: source.y0 };
          return diagonal({ source: o, target: o });
        });

      link.transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('d', diagonal);

      link.exit().transition()
        .duration(transitionDuration)
        .ease(transitionEase)
        .attr('d', function(d) {
          var o = { x: source.x, y: source.y };
          return diagonal({ source: o, target: o });
        })
        .remove();

      nodes.forEach(function(d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function computeRadius(d) {
      if (d.children || d._children) {
        return minRadius + (numEndNodes(d) / scalingFactor);
      } else {
        return minRadius;
      }
    }

    function numEndNodes(n) {
      var num = 0;
      if (n.children) {
        n.children.forEach(function(c) {
          num += numEndNodes(c);
        });
      } else if (n._children) {
        n._children.forEach(function(c) {
          num += numEndNodes(c);
        });
      } else {
        num++;
      }
      return num;
    }

    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }

      update(d);

      // fast-forward blank nodes
      if (d.children) {
        d.children.forEach(function(child) {
          if (child.isBlankNode && child._children) {
            click(child);
          }
        });
      }
    }

    function collapse(d) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
      }
    }

    update(root);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = jsonldVis;
  } else {
    d3.jsonldVis = jsonldVis;
  }
})();

},{}]},{},[2]);
