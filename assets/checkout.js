let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartItems = document.getElementById("cart-items");
        const totalPriceElement = document.getElementById("total-price");
        const deliveryDateElement = document.getElementById("delivery-date");
        let totalAmount = 0;

        function displayCart() {
            cartItems.innerHTML = "";
            totalAmount = 0;

            if (cart.length === 0) {
                cartItems.innerHTML = "<p>Your cart is empty.</p>";
                totalPriceElement.innerText = "$0.00";
                return;
            }

            cart.forEach(product => {
                let itemPrice = parseFloat(product.price.replace("$", "")) * product.quantity;
                totalAmount += itemPrice;

                cartItems.innerHTML += `
                    <div class="order-item">
                        <img src="${product.img}" alt="${product.name}">
                        <span>${product.name} (x${product.quantity})</span>
                        <span>$${itemPrice.toFixed(2)}</span>
                    </div>
                `;
            });

            totalPriceElement.innerText = `$${totalAmount.toFixed(2)}`;
        }

        function getDeliveryDate() {
            let today = new Date();
            today.setDate(today.getDate() + 5);
            let options = { weekday: "long", month: "long", day: "numeric" };
            return today.toLocaleDateString("en-US", options);
        }

        function saveAddress() {
            let door = document.getElementById("door").value;
            let street = document.getElementById("street").value;
            let district = document.getElementById("district").value;
            let pincode = document.getElementById("pincode").value;

            if (!door || !street || !district || !pincode) {
                alert("Please fill all required fields!");
                return;
            }

            let address = `${door}, ${street}, ${district}, ${pincode}`;
            localStorage.setItem("address", address);
            document.getElementById("saved-address-text").innerText = address;
            document.getElementById("address-form").style.display = "none";
            document.getElementById("saved-address").style.display = "block";
        }

        function editAddress() {
            document.getElementById("address-form").style.display = "block";
            document.getElementById("saved-address").style.display = "none";
        }

        function goToPayment() {
            if (!localStorage.getItem("address")) {
                alert("Please add a delivery address before proceeding.");
                return;
            }
            window.location.href = "payment.html";
        }

        // Load Address & Delivery Date
        document.getElementById("saved-address-text").innerText = localStorage.getItem("address") || "No saved address found.";
        deliveryDateElement.innerText = `Your order will be delivered by ${getDeliveryDate()}.`;

        displayCart();