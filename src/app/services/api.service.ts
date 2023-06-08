import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // public endpoints

  // owner
  register(ownerObject: any) {
    return this.http.post(`http://localhost:8080/api/owners/register`, ownerObject);
  }

  login(loginRequest: any) {
    console.log(loginRequest);
    return this.http.post(`http://localhost:8080/api/owners/login`, loginRequest);
  }
  
  getOwnerById(ownerId: number) {
    return this.http.get(`http://localhost:8080/api/owners/${ownerId}`);
  } 

  getAllGymsByOwnerId(ownerId: number) {
    return this.http.get(`http://localhost:8080/api/owners/${ownerId}/gyms`);
  }

  // gym
  getAllGyms() {
    return this.http.get(`http://localhost:8080/api/gyms`);
  }

  getGymById(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}`);
  }

  // equipment
  getAllEquipmentByGymId(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}/equipment`);
  }

  // amenity
  getAllAmenitiesByGymId(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}/amenities`);
  }

  // private endpoints

  // owner
  updateOwnerById(ownerId: number, ownerObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/owners/${ownerId}`, ownerObject, { headers });
  }

  deleteOwnerById(ownerId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/owners/${ownerId}`, { headers });
  }

  // gym
  createGym(gymObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms`, gymObject, { headers });
  }

  updateGymById(gymId: number, gymObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}`, gymObject, { headers });
  }

  deleteGymById(gymId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}`, { headers });
  }

  // equipment
  createEquipmentByGymId(gymId: number, equipmentObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/equipment/`, equipmentObject, { headers });
  }

  updateEquipmentByGymId(gymId: number, equipmentId: number, equipmentObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, equipmentObject, { headers });
  }

  deleteEquipmentByGymId(gymId: number, equipmentId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, { headers });
  }

  // amenity
  createAmenityByGymId(gymId: number, amenityObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/amenities/`, amenityObject, { headers });
  }

  updateAmenityByGymId(gymId: number, amenityId: number, amenityObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, amenityObject, { headers });
  }

  deleteAmenityByGymId(gymId: number, amenityId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, { headers });
  }
}