import { useState } from "react";
import "../styles/FoodDonationForm.css"; // Import your custom CSS file

function FoodDonationForm() {
  const [formData, setFormData] = useState({
    foodItems: "",
    expirationDate: "",
    packagingCondition: "",
    allergenInfo: "",
    quantity: "",
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    adrress: "",
    charities: "",
    pickupDetails: "",
  });
  const [charities, setcharities] = useState([
    {
      id: 1,
      name: "Egyptian Food Bank",
      description:
        "The Egyptian Food Bank is a non-profit organization that aims to fight hunger and food insecurity in Egypt.",
      website: "https://www.egyptianfoodbank.com/",
    },
    {
      id: 2,
      name: "Misr El Kheir Foundation",
      description:
        "Misr El Kheir Foundation is an Egyptian charitable organization that focuses on social development and community welfare projects.",
      website: "https://www.misrelkheir.org/",
    },
    {
      id: 3,
      name: "Resala Charity Organization",
      description:
        "Resala is a non-profit organization in Egypt that provides various social services and support to underprivileged individuals and communities.",
      website: "https://resala.org/",
    },
    {
      id: 4,
      name: "Basma Association",
      description:
        "Basma Association for Comprehensive Development is an Egyptian NGO that works on community development projects, particularly in health and education.",
      website: "https://www.basma-eg.com/",
    },
    {
      id: 5,
      name: "Ezbet Project",
      description:
        "Ezbet Project is a charitable initiative that focuses on improving living conditions and providing support to residents of informal settlements in Egypt.",
      website: "https://www.ezbetproject.org/",
    },
    {
      id: 6,
      name: "Egyptian Cancer Society",
      description:
        "The Egyptian Cancer Society is a non-profit organization dedicated to cancer prevention, treatment, and support services in Egypt.",
      website: "https://www.egyptiancancersociety.org/",
    },
    {
      id: 7,
      name: "Sawiris Foundation for Social Development",
      description:
        "Sawiris Foundation for Social Development is an Egyptian NGO that focuses on education, health, and community development projects.",
      website: "https://sawirisfoundation.org/",
    },
    {
      id: 8,
      name: "Coptic Evangelical Organization for Social Services",
      description:
        "The Coptic Evangelical Organization for Social Services (CEOSS) is an Egyptian NGO that provides development and relief services to marginalized communities.",
      website: "https://www.ceoss.org.eg/",
    },
  ]);
  const [errors, setErrors] = useState({});
  const successCallback = (position) => {
    setFormData({ adrress: position });
  };

  const errorCallback = (error) => {
    return <>something wrong when i get location {error.message}</>;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.foodItems.trim()) {
      newErrors.foodItems = "Food Items is required";
    }
    if (!formData.charities.trim()) {
      newErrors.foodItems = "charity is required";
    }
    // Add validation for other fields similarly
    if (!formData.quantity.trim()) {
      newErrors.quantity = "Quantity is required";
    }
    if (!formData.packagingCondition.trim()) {
      newErrors.packagingCondition = "packaging Condition is required";
    }
    if (!formData.allergenInfo.trim()) {
      newErrors.allergenInfo = "Allergen Information is required";
    }
    if (!formData.donorName.trim()) {
      newErrors.donorName = "Quantity is required";
    }
    if (!formData.donorEmail.trim()) {
      newErrors.donorEmail = "Donor Email is required";
    } else if (!isValidEmail(formData.donorEmail.trim())) {
      newErrors.donorEmail = "Invalid email format";
    }
    if (!formData.donorPhone.trim()) {
      newErrors.donorPhone = "Donor Phone is required";
    } else if (!isValidPhone(formData.donorPhone.trim())) {
      newErrors.donorPhone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted!", formData);
    }
  };
  return (
    <div className="page-container">
      <div className="FormContainer container  mt-5">
        <h2 className="text-center mb-4 donate_title">Food Donation Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="row  justify-content-around  ">
            <div className="col-md-5">
              <div className="donate-form-group">
                <label className="donate_label">Food Items:</label>
                <select
                  className="form-control"
                  name="foodItems"
                  value={formData.foodItems}
                  onChange={handleChange}
                >
                  <option value="">Select Food Item</option>
                  <option value="Canned Goods">Canned Goods</option>
                  <option value="Grains">Grains</option>
                  <option value="Proteins">Proteins</option>
                  <option value="Fresh Produce">Fresh Produce</option>
                </select>{" "}
                {errors.foodItems && (
                  <div className="text-danger">{errors.foodItems}</div>
                )}
              </div>
              <div className="donate-form-group">
                <label className="donate_label">Packaging Condition:</label>
                <input
                  type="text"
                  className="form-control donate_input"
                  name="packagingCondition"
                  value={formData.packagingCondition}
                  onChange={handleChange}
                />
              </div>
              {errors.packagingCondition && (
                <div className="text-danger">{errors.packagingCondition}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">charities :</label>
                <select
                  className="form-control"
                  name="charities"
                  value={formData.charities}
                  onChange={handleChange}
                >
                  <option value="">Select Charity</option>
                  {charities?.map((charity) => {
                    return (
                      <option key={charity.website} value={charity.name}>
                        {charity.name}
                      </option>
                    );
                  })}
                </select>{" "}
                {errors.charities && (
                  <div className="text-danger">{errors.charities}</div>
                )}
              </div>
              {errors.handlingInstructions && (
                <div className="text-danger">{errors.handlingInstructions}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">
                  Expiration Date:(optional)
                </label>
                <input
                  type="date"
                  className="form-control donate_input"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                />
              </div>
              <div className="donate-form-group">
                <label className="donate_label">Quantity:(KG)</label>
                <input
                  type="number"
                  className="form-control donate_input"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>
              {errors.quantity && (
                <div className="text-danger">{errors.quantity}</div>
              )}
            </div>
            <div className="col-md-5">
              <div className="donate-form-group">
                <label className="donate_label">Allergen Information:</label>
                <input
                  type="text"
                  className="form-control donate_input"
                  name="allergenInfo"
                  value={formData.allergenInfo}
                  onChange={handleChange}
                />
              </div>
              {errors.allergenInfo && (
                <div className="text-danger">{errors.allergenInfo}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">Donor Name:</label>
                <input
                  type="text"
                  className="form-control donate_input"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleChange}
                />
              </div>
              {errors.donorName && (
                <div className="text-danger">{errors.donorName}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">Donor Email:</label>
                <input
                  type="email"
                  className="form-control donate_input"
                  name="donorEmail"
                  value={formData.donorEmail}
                  onChange={handleChange}
                />
              </div>
              {errors.donorEmail && (
                <div className="text-danger">{errors.donorEmail}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">Donor Phone:</label>
                <input
                  type="tel"
                  className="form-control donate_input"
                  name="donorPhone"
                  value={formData.donorPhone}
                  onChange={handleChange}
                />
              </div>
              {errors.donorEmail && (
                <div className="text-danger">{errors.donorPhone}</div>
              )}
              <div className="donate-form-group">
                <label className="donate_label">Pickup Details:</label>
                <textarea
                  className="form-control donate_input"
                  name="pickupDetails"
                  value={formData.pickupDetails}
                  onChange={handleChange}
                  placeholder="prefered time  and all notes you want to leave for us"
                />
              </div>
              {errors.pickupDetails && (
                <div className="text-danger">{errors.pickupDetails}</div>
              )}
            </div>
          </div>
          <div className="container   text-center ">
            <button type="submit " className="btn btn-success donate_submit  ">
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FoodDonationForm;
