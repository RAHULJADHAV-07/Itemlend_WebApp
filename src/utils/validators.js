export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateName = (name) => {
  return name.trim().length >= 2;
};

export const validatePrice = (price) => {
  const numPrice = parseFloat(price);
  return !isNaN(numPrice) && numPrice > 0;
};

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0;
};

export const validateDescription = (description) => {
  return description.trim().length >= 10 && description.trim().length <= 500;
};

export const validateLocation = (location) => {
  return location.trim().length >= 2;
};

export const validateAvailabilityDates = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return start >= today && end > start;
};

export const formatValidationErrors = (errors) => {
  return Object.entries(errors)
    .filter(([_, error]) => error)
    .reduce((acc, [field, error]) => ({
      ...acc,
      [field]: error
    }), {});
};
