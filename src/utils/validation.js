export const isEmailValid = (email) => {
	return /\S+@\S+\.\S+/.test(email);
};

export const isPasswordValid = (password) => {
	return password.length >= 6;
};

export const isPhoneValid = (phone) => {
	return /^[0-9]{10}$/.test(phone);
};
