 {/* PRICE */}
             
              I want to book the following decoration:

🎈 Decoration: ${selectedImage.title}
📝 ${selectedImage.description}

💰 Price: ${selectedImage.price}
${
  selectedImage.discount
    ? `🔥 Discount: ${selectedImage.discount}`
    : ""
}

🧰 Items Used:
${
  selectedImage.itemsUsed
    ? selectedImage.itemsUsed.map((i) => `• ${i}`).join("\n")
    : "Not specified"
}

Please share availability & booking details.`