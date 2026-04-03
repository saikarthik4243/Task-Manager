//package com.example.TaskManagement.Config;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//public class WebConfig implements WebMvcConfigurer {
//
//    @Value("${frontend.url")
//    String frontEndUrl;
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins(frontEndUrl)
//                .allowedMethods("GET","PUT","POST","DELETE","OPTIONS")
//                .allowedHeaders("*")
//                .allowCredentials(true);
//    }
//}
