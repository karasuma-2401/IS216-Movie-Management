package com.movie.server.service;

import com.movie.server.dto.request.LoginRequest;
import com.movie.server.dto.request.RegisterRequest;
import com.movie.server.dto.response.AuthResponse;
import com.movie.server.entity.User;
import com.movie.server.enums.Role;
import com.movie.server.exception.BadRequestException;
import com.movie.server.repository.UserRepository;
import com.movie.server.security.JwtService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email đã tồn tại");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail().toLowerCase());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.CUSTOMER);
        user.setCreatedAt(LocalDateTime.now());
        userRepository.save(user);
        return AuthResponse.builder().message("Đăng ký thành công").build();
    }

    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail().toLowerCase())
                .orElseThrow(() -> new BadRequestException("Email hoặc mật khẩu không đúng"));
        if (user.getDeletedAt() != null) {
            throw new BadRequestException("Tài khoản không tồn tại");
        }
        if (!user.isEnabled()) {
            throw new BadRequestException("Tài khoản đã bị khóa");
        }
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadRequestException("Email hoặc mật khẩu không đúng");
        }
        String token = jwtService.generateToken(user);
        return AuthResponse.builder()
                .token(token)
                .email(user.getEmail())
                .fullName(user.getName())
                .role(user.getRole().name())
                .message("Đăng nhập thành công")
                .build();
    }
}
