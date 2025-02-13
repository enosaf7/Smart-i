function payWithPaystack(e) {
    e.preventDefault();
    
    let handler = PaystackPop.setup({
        key: 'pk_test_191294d1f933b9925b6b1e58fe9a73218324869e', // Replace with your public key
        email: document.getElementById("email").value,
        amount: document.getElementById("amount").value * 100, // Convert to kobo
        firstname: document.getElementById("first-name").value,
        lastname: document.getElementById("last-name").value,
        ref: 'DON'+Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
        
        callback: function(response) {
            // This happens after the payment is completed successfully
            alert('Payment complete! Reference: ' + response.reference);
            // You can send this reference to your server to verify the transaction
        },
        
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        }
    });
    
    handler.openIframe();
} 