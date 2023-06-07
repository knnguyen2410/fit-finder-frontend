import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  updateOwnerById(ownerId: number, ownerObject: any) {
    return this.http.put(`http://localhost:8080/api/owners/${ownerId}`, ownerObject);
  }  
  deleteOwnerById(ownerId: number) {
    return this.http.delete(`http://localhost:8080/api/owners/${ownerId}`);
  }  

  // gym
  createGym(gymObject: any) {
    return this.http.post(`http://localhost:8080/api/gyms`, gymObject);
  }  
  updateGymById(gymId: number, gymObject: any) {
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}`, gymObject);
  }  
  deleteGymById(gymId: number) {
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}`);
  }  

  // equipment
  createEquipmentByGymId(gymId: number, equipmentObject: any) {
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/equipment`, equipmentObject);
  }  
  updateEquipmentByGymId(gymId: number, equipmentId: number, equipmentObject: any) {
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, equipmentObject);
  }  
  deleteEquipmentByGymId(gymId: number, equipmentId: number) {
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`);
  }

  // amenity
  createAmenityByGymId(gymId: number, amenityObject: any) {
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/amenities`, amenityObject);
  }  
  updateAmenityByGymId(gymId: number, amenityId: number, amenityObject: any) {
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, amenityObject);
  }  
  deleteAmenityByGymId(gymId: number, amenityId: number) {
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`);
  }
}