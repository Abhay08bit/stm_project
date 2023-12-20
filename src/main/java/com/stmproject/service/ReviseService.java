package com.stmproject.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.stmproject.model.STM;

public interface ReviseService {
	    STM getSTMById(String id);

	    void updateSTM(STM updatedSTM, MultipartFile pdfFile, MultipartFile wordFile) throws IOException;

	    //String saveFile(MultipartFile file, String extension) throws IOException;

		String saveFile(MultipartFile file, String stmNo, String revisionNo, String extension) throws IOException;
	}



