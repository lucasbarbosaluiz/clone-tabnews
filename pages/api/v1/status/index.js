function status(request, response) {
  response.status(200).json({ chave: "bonsoir" });
}

export default status;
