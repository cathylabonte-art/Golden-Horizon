// JavaScript for WhatsApp Integration and Booking Functionality

// WhatsApp Integration for Booking
function openWhatsApp(bookingDetails) {
    const message = encodeURIComponent(`Booking Details: ${bookingDetails}`);
    const phoneNumber = '1234567890'; // Replace with actual number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}

// Form Submission Handler
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const adults = document.getElementById('adults').value;
    const children = document.getElementById('children').value;
    const totalPrice = calculatePrice(adults, children);
    const bookingDetails = `Adults: ${adults}, Children: ${children}, Total Price: ${totalPrice}`;

    // Open WhatsApp with booking details
    openWhatsApp(bookingDetails);
});

// Price Calculation Function
function calculatePrice(adults, children) {
    const adultPrice = 50; // Price per adult
    const childPrice = 25; // Price per child
    const totalAdultPrice = adults * adultPrice;
    const totalChildPrice = children * childPrice;
    return totalAdultPrice + totalChildPrice;
}