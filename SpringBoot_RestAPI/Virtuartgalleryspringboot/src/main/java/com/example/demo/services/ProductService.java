package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Product;
import com.example.demo.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository prepo;

	public Product addProduct(Product p) {
		return prepo.save(p);
	}

	public List<Product> getAllProduct() {
		return prepo.findAll();
	}

	public Product getProductById(int pId) {
		return prepo.findById(pId).get();
	}
	
	public boolean upload(int pid, byte[] photo) {
		if(prepo.uploadPhoto(pid,photo)==1) {
			return true;
		}
		else {
		return false;
		}
	}

	 public byte[] getProductImage(int productId) {
	        Product product = prepo.findById(productId)
	                .orElseThrow(() -> new RuntimeException("Product not found with id " + productId));
	        return product.getImage();
	    }

	

}
