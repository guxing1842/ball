package com.tbug.ball.manage;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("spring-dubbo-consumer.xml")
public class ManageApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ManageApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("  .   ____          _            __ _ _");
		System.out.println(" /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\");
		System.out.println("( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\");
		System.out.println(" \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )");
		System.out.println("  '  |____| .__|_| |_|_| |_\\__, | / / / /");
		System.out.println(" =========|_|==============|___/=/_/_/_/");
		System.out.println(" :: Spring Boot ::  ball-manage start");
	}
}
