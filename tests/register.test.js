const request = require('supertest');
const express = require('express');
const Role = require('../models/Role');
const User = require('../models/User');
const app = express();
require('../config/dbConfig')();

app.use(express.json());
app.use('/auth', require('../routes/authRoutes'));

describe('register function', () => {
    it('should return a 400 response if any required field is missing', async () => {
      const body = {
      };
      const response = await request(app)
        .post('/auth/register')
        .send(body);
      expect(response.statusCode).toBe(400);
      expect(response.body).toEqual({ message: 'All fields are required' });
    });

    it('should return a 400 response if the passwords are not the same', async () => {
        const body = {
          email: 'test@example.com',
          full_name: 'Test User',
          password: 'password123',
          password_confirmation: 'password456', 
          phone_number: '1234567890',
          address: '123 Main St',
          role: 'Client',
        };
        const response = await request(app)
          .post('/auth/register')
          .send(body);
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Passwords do not match' });
    });

    it('should return a 400 response if Role is invalid', async () => {
      const body = {
          email: 'test@example.com',
          full_name: 'Test User',
          password: 'password123',
          password_confirmation: 'password123',
          phone_number: '1234567890',
          address: '123 Main St',
          role: 'Manager',
        };
        const response = await request(app)
          .post('/auth/register')
          .send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Invalid Role' });
    });

    it('should return a 400 response if Email already token', async () => {
      Role.findOne = jest.fn().mockResolvedValue({})
      User.findOne = jest.fn().mockResolvedValue({email : true})
      const body = {
          email: 'existing@example.com',
          full_name: 'Test User',
          password: 'password123',
          password_confirmation: 'password123',
          phone_number: '1234567890',
          address: '123 Main St',
          role: 'Client',
        };
        const response = await request(app)
          .post('/auth/register')
          .send(body);

        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ message: 'Email already token' });
    });
    
    it('should return a 201 response if User inserted', async () => {
      Role.findOne = jest.fn().mockResolvedValue({})
      User.findOne = jest.fn().mockResolvedValue(null)
      User.save = jest.fn().mockResolvedValue(true);

      const body = {
          email: 'existing2@example.com',
          full_name: 'Test User',
          password: 'password123',
          password_confirmation: 'password123',
          phone_number: '1234567890',
          address: '123 Main St',
          role: 'Client',
        };
        const response = await request(app)
          .post('/auth/register')
          .send(body);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject({
          message: 'User has been added',
          user: expect.any(Object),
        });
  })

})