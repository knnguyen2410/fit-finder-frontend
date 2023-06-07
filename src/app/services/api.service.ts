import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // public endpoints

  // owner
  // register
  // login
  
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
  updateOwnerById(ownerId: number, ownerObject: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/owners/${ownerId}`, ownerObject, { headers });
  }

  deleteOwnerById(ownerId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/owners/${ownerId}`, { headers });
  }

  // gym
  updateGymById(gymId: number, gymObject: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}`, gymObject, { headers });
  }

  deleteGymById(gymId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}`, { headers });
  }

  // equipment
  updateEquipmentByGymId(gymId: number, equipmentId: number, equipmentObject: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, equipmentObject, { headers });
  }

  deleteEquipmentByGymId(gymId: number, equipmentId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, { headers });
  }

  // amenity
  updateAmenityByGymId(gymId: number, amenityId: number, amenityObject: any, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, amenityObject, { headers });
  }

  deleteAmenityByGymId(gymId: number, amenityId: number, token: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, { headers });
  }
}