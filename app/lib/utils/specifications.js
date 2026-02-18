// Utility functions to transform car features data into specifications format

// --- BEGIN FIXED SPECIFICATION STRUCTURE ---
export const SPECIFICATION_GROUPS = [
  {
    label: "Engine & Transmission",
    icon: "/images/detail-page/detail-bbt-engine-black.webp",
    fields: [
      { key: "bodytype", label: "Body Type" },
      { key: "lifestyle", label: "Life Style" },
      { key: "enginedisplacement", label: "Engine Displacement" },
      { key: "powerfigure", label: "Power Figure" },
      { key: "torquefigure", label: "Torque Figure" },
      { key: "drivetrain", label: "Drivetrain" },
      { key: "transmission", label: "Transmission" },
    ],
  },
  {
    label: "Hybrid System",
    icon: "/images/detail-page/detail-tab-icon-2.webp",
    fields: [
      { key: "emotor", label: "E-Motor Type/Size" },
      { key: "powerfigure1", label: "Power Figure" },
      { key: "torquefigure1", label: "Torque Figure" },
      { key: "combinedpower", label: "Combined Power & Torque" },
    ],
  },
  {
    label: "Performance & Efficiency",
    icon: "/images/detail-page/detail-tab-icon-4.webp",
    fields: [
      { key: "ecostart", label: "Eco Start/Stop System" },
      { key: "drivingmodes", label: "Driving Modes" },
      { key: "terrainresponse", label: "Terrain Response Mode" },
      { key: "activeaerodynamics", label: "Active Aerodynamics" },
      { key: "exhaustsystem", label: "Exhaust System/Type" },
      { key: "rearaxle", label: "Rear Axle Steering" },
      { key: "acceleration", label: "Acceleration 0-100kmph" },
      { key: "topspeed", label: "TopSpeed" },
      { key: "fueltype", label: "Fuel Type" },
      { key: "fuelcomsumption", label: "Fuel Consumption" },
      { key: "emission", label: "Emission Std" },
    ],
  },
  {
    label: "Exterior Equipment",
    icon: "/images/detail-page/detail-tab-icon-5.webp",
    fields: [
      { key: "headlamps", label: "HeadLamps" },
      { key: "headlampwasher", label: "HeadLamp Washer" },
      { key: "drls", label: "DRLs" },
      { key: "foglamps", label: "Fog Lamps" },
      { key: "corneringlamps", label: "Cornering Lamps" },
      { key: "homelamps", label: "Follow Me Home Lamps" },
      { key: "rainsensing", label: "Rain Sensing Wipers" },
      { key: "orvm", label: "ORVM" },
      { key: "puddlelamps", label: "Puddle Lamps" },
      { key: "glazingwindows", label: "Heat Protecting Glazing Windows" },
      { key: "framelessdoors", label: "Frameless Doors" },
      { key: "softclosedoors", label: "Soft Close Doors" },
      { key: "centrallocking", label: "Central Locking" },
      { key: "integratedroof", label: "Integrated Roof Rails" },
      { key: "glasssunroof", label: "Glass Sunroof" },
      { key: "taillamps", label: "TailLamps" },
      { key: "foglamp1", label: "Fog Lamps" },
      { key: "thirdbreakLight", label: "Third Break Light" },
      { key: "antenna", label: "Sharkfin Antenna" },
      { key: "rearwipers", label: "Rear Wipers" },
      { key: "defogger", label: "Defogger" },
      { key: "bootlidopener", label: "Power BootLid Opening" },
      { key: "sidefoot", label: "Side Foot Step" },
      { key: "diffuser", label: "Rear Diffuser" },
      { key: "spolier", label: "Rear Spoiler" },
      { key: "exhausttips", label: "Exhaust Tips" },
      { key: "convertible", label: "Convertible Roof" },
      { key: "bootopener", label: "Easy Access Boot Opener" },
      { key: "displaykey", label: "Digital Display Key" },
      { key: "keyband", label: "Sports Assisted Key Band" },
      { key: "otherequipment", label: "Other Equipment" },
    ],
  },
  {
    label: "Interior Equipment",
    icon: "/images/detail-page/detail-tab-icon-6.webp",
    fields: [
      { key: "interior", label: "Interior" },
      { key: "interiortrim", label: "Interior Trim" },
      { key: "gearknob", label: "Gear Knob" },
      { key: "sidesill", label: "Side Sill Moulding" },
      { key: "keylessstart", label: "Keyless Start/Stop" },
      { key: "climate", label: "Climate Control System" },
      { key: "firstRow", label: "1st Row" },
      { key: "secondrow", label: "2nd Row" },
      { key: "thirdrow", label: "3rd Row" },
      { key: "heater", label: "Heater" },
      { key: "vanity", label: "Vanity Mirror" },
      { key: "cabinlamps", label: "Cabin Lamps" },
      { key: "analog", label: "Analog Clock" },
      { key: "frontarmrest", label: "Front Armrest" },
      { key: "cupholders", label: "Cupholders" },
      { key: "coolglove", label: "Cool Glove Box" },
      { key: "reararmrest", label: "Rear Armrest" },
      { key: "refrigerator", label: "Rear Refrigerator" },
      { key: "smokerspackage", label: "Smokers Package" },
      { key: "wifi", label: "InCar Wi-Fi" },
      { key: "ambient", label: "Ambient Lighting" },
      { key: "wirelesscharging", label: "Wireless Charging" },
      { key: "powersocket", label: "Power Socket" },
      { key: "usb", label: "USB/AUX" },
      { key: "autodimmingirvm", label: "Autodimming IRVM" },
      { key: "autodimmingorvm", label: "Autodimming ORVM" },
      { key: "powerwindows", label: "Power Windows" },
      { key: "windowsblind", label: "Rear Windows Blind" },
      { key: "windsheildblind", label: "Rear Windshield Blind" },
      { key: "bootLid", label: "Bootlid Opener" },
      { key: "childsafety", label: "Child Safety Lock" },
      { key: "steeringwheel", label: "Steering Wheel" },
      { key: "wheelsequipments", label: "Steering wheels Equipments" },
      { key: "heatedsteering", label: "Heated Steering Wheel" },
      { key: "wheeladjustment", label: "Steering Wheel Adjustment" },
      { key: "paddleshifters", label: "Paddle Shifters" },
      { key: "headsup", label: "Heads Up Display" },
      { key: "handbrake", label: "Electric Handbrake" },
      { key: "instrumentcluster", label: "Instrument Cluster" },
      { key: "speedometer", label: "Speedometer" },
      { key: "tachometer", label: "Tachometer" },
      { key: "fuelguage", label: "Fuel Guage" },
      { key: "enginetemp", label: "Engine Temp Guage" },
      { key: "mid", label: "MID" },
      { key: "digitalspeed", label: "Digital Speed" },
      { key: "gearposition", label: "Gear Position Indicator" },
      { key: "gearshifting", label: "Gear Shifting Indicator" },
      { key: "tripmeter", label: "Trip Meter: Two" },
      { key: "avspeed", label: "Av Speed" },
      { key: "avfuel", label: "Av Fuel Consumption" },
      { key: "realtimefuel", label: "Realtime Fuel Consumption" },
      { key: "fuelrange", label: "Fuel Range" },
      { key: "lowfuel", label: "Low Fuel Warning" },
      { key: "doorajar", label: "Door Ajar Warning" },
      { key: "glassroof", label: "Glass Roof" },
      { key: "emergencyspare", label: "Emergency Spare Wheel" },
      { key: "otherequipment", label: "Other Equipment" },
    ],
  },
  {
    label: "Seats & Upholstery",
    icon: "/images/detail-page/detail-tab-icon-7.webp",
    fields: [
      { key: "frontseats", label: "Front Seats" },
      { key: "comfortdriver", label: "Comfort Driver Seat" },
      { key: "comfortcodriver", label: "Comfort Co-Driver Seat" },
      { key: "electriclumbar", label: "Electric Lumbar Support Driver Seat" },
      { key: "supportcodriver", label: "Electric Lumbar Support Co-Driver Seat: Yes" },
      { key: "adjustmentdriver", label: "Powered Height Adjustment Driver Seat" },
      { key: "adjustmentcodriver", label: "Powered Height Adjustment Co-Driver Seat" },
      { key: "extensiondriver", label: "Powered Underthigh Extension Driver Seat" },
      { key: "extensioncodriver", label: "Powered Underthigh Extension Co-Driver Seat" },
      { key: "headrestdriver", label: "Powered Headrest Driver Seat" },
      { key: "headrestcodriver", label: "Powered Headrest Co-Driver Seat" },
      { key: "ventilatedfrontseat", label: "Ventilated Front Seats" },
      { key: "heatedfrontseat", label: "Heated Front Seats" },
      { key: "frontseatmsg", label: "Front Seat Massage" },
      { key: "rearseats", label: "Rear Seats" },
      { key: "comfortseats", label: "Comfort Seats" },
      { key: "poweredside", label: "Electric Lumbar Support" },
      { key: "poweredunderthigh", label: "Powered Side Bolsters" },
      { key: "seatmassage", label: "Seat Massage" },
      { key: "xecutivelouenge", label: "Executive Lounge Seating" },
      { key: "gentlemenfunction", label: "Gentlemen Function" },
      { key: "interiorupholstery", label: "Interior Upholstery" },
      { key: "headliner", label: "Headliner" },
      { key: "seatbelt", label: "Seat Belt" },
      { key: "secondrow", label: "2nd Row" },
      { key: "thirdrow", label: "3rd Row" },
    ],
  },
  {
    label: "Entertainment",
    icon: "/images/detail-page/detail-tab-icon-8.webp",
    fields: [
      { key: "hdcolour", label: "HD Colour Display" },
      { key: "harddrive", label: "In-Built Hard Drive" },
      { key: "dvd", label: "CD/DVD Player" },
      { key: "radio", label: "AM/FM Radio" },
      { key: "bluetooth", label: "Bluetooth Connectivity" },
      { key: "music", label: "Music System w/ Power Output" },
      { key: "speakers", label: "No of Speakers" },
      { key: "applecarplay", label: "Apple CarPlay" },
      { key: "android", label: "Android Auto" },
      { key: "gps", label: "GPS Navigation" },
      { key: "convenienceapps", label: "In-Built Convenience Apps" },
      { key: "voicecontrol", label: "Enhanced Voice Control" },
      { key: "gesturecontrol", label: "Gesture Control" },
      { key: "touchpadcontroller", label: "Touchpad / Rotary Controller" },
      { key: "entertainmentfrontother", label: "Other Equipment (Front)" },
      { key: "screens", label: "Screens (Rear)" },
      { key: "inputports", label: "Input ports (Rear)" },
      { key: "entertainmentrearother", label: "Other Equipments (Rear)" },
    ],
  },
  {
    label: "Safety Equipments",
    icon: "/images/detail-page/detail-tab-icon-10.webp",
    fields: [
      { key: "airbags", label: "Airbags" },
      { key: "abs", label: "ABS" },
      { key: "ebd", label: "EBD" },
      { key: "ba", label: "BA" },
      { key: "esp", label: "ESP" },
      { key: "tc", label: "TC" },
      { key: "tmps", label: "TMPS" },
      { key: "hillhold", label: "Hill Hold Assist" },
      { key: "blindspot", label: "Blind Spot Assist" },
      { key: "lanekeep", label: "Lane Keep Assist" },
      { key: "beltwarning", label: "Seat Belt Warning" },
      { key: "cruisecontrol", label: "Cruise Control" },
      { key: "limitedslip", label: "Limited Slip Differential" },
      { key: "parkingsensors", label: "Parking Sensors" },
      { key: "reversecamera", label: "Reverse Camera" },
      { key: "arialview", label: "360 Arial View/Panoramic View" },
      { key: "parkingassistance", label: "Parking Assistance" },
      { key: "remoteparking", label: "Remote Parking" },
      { key: "remotecentral", label: "Remote Central Locking" },
      { key: "regenerative", label: "Regenerative Braking" },
      { key: "beltpretentioners", label: "Seat Belt Pretentioners" },
      { key: "nightvision", label: "Night Vision" },
      { key: "corneringbrakeControl", label: "Cornering Brake Control" },
      { key: "parkingbrake", label: "Electric Parking Brake" },
      { key: "vehicleimmobiliser", label: "Vehicle Immobiliser" },
      { key: "isofix", label: "ISOFIX Child Seat Mounting" },
      { key: "speedsensing", label: "Speed Sensing Door Locks" },
      { key: "emergencyrear", label: "Emergency Rear Brake Light" },
      { key: "chassisconstruction", label: "Chassis construction" },
      { key: "bodyconstruction", label: "Body Construction" },
      { key: "dualpopup", label: "Dual Popup Roll Bars (in-convertibles)" },
      { key: "popuphood", label: "Popup Hood (During Frontal Collision)" },
      { key: "othersafetyequipments", label: "Other Safety Equipments" },
    ],
  },
  {
    label: "Suspension, Brakes, Wheels & Tires",
    icon: "/images/detail-page/detail-tab-icon-11.webp",
    fields: [
      { key: "frontsuspension", label: "Front Suspension" },
      { key: "rearsuspension", label: "Rear Suspension" },
      { key: "frontbrakes", label: "Front Brakes" },
      { key: "rearbrakes", label: "Rear Brakes" },
      { key: "frontwheels", label: "Front Wheels / Tires" },
      { key: "rearwheels", label: "Rear Wheels / Tires" },
    ],
  },
  {
    label: "Dimensions, Weight, Storage, Capacity",
    icon: "/images/detail-page/detail-tab-icon-12.webp",
    fields: [
      { key: "length", label: "Length" },
      { key: "width", label: "Width" },
      { key: "height", label: "Height" },
      { key: "wheelbase", label: "Wheelbase" },
      { key: "fronttrack", label: "Front Track" },
      { key: "reartrack", label: "Rear Track" },
      { key: "groundclearance", label: "Ground Clearance" },
      { key: "doors", label: "Doors" },
      { key: "seatingcapacity", label: "Seating Capacity" },
      { key: "rows", label: "Rows" },
      { key: "kerbweight", label: "Kerb weight" },
      { key: "bootspace", label: "Bootspace" },
      { key: "fuelcapacity", label: "Fuel Capacity" },
    ],
  },
  {
    label: "Warranty & Service Package",
    icon: "/images/detail-page/detail-tab-icon-13.webp",
    fields: [
      { key: "warranty", label: "Warranty" },
      { key: "serivepackage", label: "Service Package w/ Details" },
      { key: "exteriorcolours", label: "Exterior Colours" },
    ],
  },
];
// --- END FIXED SPECIFICATION STRUCTURE ---

// Helper for overview fields
const OVERVIEW_FIELDS = [
  { key: "vehicletype", label: "Vehicle Type" },
  { key: "fueltype", label: "Fuel Type" },
  { key: "enginedisplacement", label: "Engine" },
  { key: "transmission", label: "Transmission" },
  // { key: "registrationyear", label: "Registration Year" },
  { key: "kmdriven", label: "KM Driven" },
  { key: "bodytype", label: "Body Type" },
  { key: "powerfigure", label: "Power Figure" },
  { key: "torquefigure", label: "Torque Figure" },
  { key: "drivetrain", label: "Drivetrain" },
];

export const transformCarFeaturesToSpecifications = (carFeatures = {}) => {
  // Overview group always first
  const overview = {
    title: "Overview",
    icon: "/images/detail-page/detail-tab-icon-1.webp",
    detailList: OVERVIEW_FIELDS.map(field => {
      let value = carFeatures[field.key] || "N/A";
      
      return {
        title: field.label,
        description: (
          value !== undefined &&
          value !== null &&
          String(value).trim() !== "" &&
          String(value).trim().toLowerCase() !== "n/a"
        ) ? String(value) : "N/A"
      };
    })
  };

  // The rest of the fixed groups
  const rest = SPECIFICATION_GROUPS.map(group => ({
    title: group.label,
    icon: group.icon || "",
    detailList: group.fields.map(field => ({
      title: field.label,
      description: (
        carFeatures[field.key] !== undefined &&
        carFeatures[field.key] !== null &&
        String(carFeatures[field.key]).trim() !== "" &&
        String(carFeatures[field.key]).trim().toLowerCase() !== "n/a"
      )
        ? String(carFeatures[field.key])
        : "N/A"
    }))
  }));

  return [overview, ...rest];
};

// Get maintenance specifications from car data
export const getMaintenanceSpecifications = (carData) => {
  const specifications = [];

  // Create specifications from maintenance data
  if (carData.requiredMaintenance && carData.requiredMaintenance.length > 0) {
    specifications.push({
      title: "Required Maintenance",
      icon: "/images/detail-page/detail-tab-icon-1.webp",
      detailList: carData.requiredMaintenance.map(item => ({
        title: item,
        description: ""
      }))
    });
  }

  if (carData.preventiveMaintenance && carData.preventiveMaintenance.length > 0) {
    specifications.push({
      title: "Preventive Maintenance",
      icon: "/images/detail-page/detail-tab-icon-4.webp",
      detailList: carData.preventiveMaintenance.map(item => ({
        title: item,
        description: ""
      }))
    });
  }

  if (carData.partsReplaced && carData.partsReplaced.length > 0) {
    specifications.push({
      title: "Parts Replaced",
      icon: "/images/detail-page/detail-tab-icon-11.webp",
      detailList: carData.partsReplaced.map(item => ({
        title: item,
        description: ""
      }))
    });
  }

  return specifications;
};

// Fallback specifications for when carFeatures is not available
export const getFallbackSpecifications = (carData) => {
  return getMaintenanceSpecifications(carData);
};

// Combine car features specifications with maintenance data
export const combineSpecifications = (carFeatures = {}, carData = {}) => {
  const featureSpecs = transformCarFeaturesToSpecifications(carFeatures);
  const maintenanceSpecs = getMaintenanceSpecifications(carData);
  
  // Return combined specifications (features first, then maintenance)
  return [...featureSpecs, ...maintenanceSpecs];
}; 