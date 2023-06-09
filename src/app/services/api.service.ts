import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // public endpoints

  // owner

  /**
   * Registers a new owner.
   * @param ownerObject The owner data to be registered.
   * @returns An HTTP POST request observable.
   */
  register(ownerObject: any) {
    return this.http.post(`http://localhost:8080/api/owners/register`, ownerObject);
  }

  /**
   * Performs owner login.
   * @param loginRequest The login request data.
   * @returns An HTTP POST request observable.
   */
  login(loginRequest: any) {
    console.log(loginRequest);
    return this.http.post(`http://localhost:8080/api/owners/login`, loginRequest);
  }

  /**
   * Retrieves all owners.
   * @returns An HTTP GET request observable.
   */
  getAllOwners() {
    return this.http.get(`http://localhost:8080/api/owners`);
  }
  
  /**
   * Retrieves an owner by ID.
   * @param ownerId The ID of the owner to retrieve.
   * @returns An HTTP GET request observable.
   */
  getOwnerById(ownerId: number) {
    return this.http.get(`http://localhost:8080/api/owners/${ownerId}`);
  } 

  /**
   * Retrieves all gyms owned by an owner.
   * @param ownerId The ID of the owner.
   * @returns An HTTP GET request observable.
   */
  getAllGymsByOwnerId(ownerId: number) {
    return this.http.get(`http://localhost:8080/api/owners/${ownerId}/gyms`);
  }

  // gym

  /**
   * Retrieves all gyms.
   * @returns An HTTP GET request observable.
   */
  getAllGyms() {
    return this.http.get(`http://localhost:8080/api/gyms`);
  }

    /**
    Retrieves a gym by ID.
   * @param gymId The ID of the gym to retrieve.
   * @returns An HTTP GET request observable.
   */
  getGymById(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}`);
  }

  // equipment
  
  /**
   * Retrieves all equipment.
   * @returns An HTTP GET request observable.
   */
  getAllEquipment() {
    return this.http.get(`http://localhost:8080/api/equipment`);
  }

  /**
   * Retrieves all equipment of a gym.
   * @param gymId The ID of the gym.
   * @returns An HTTP GET request observable.
   */
  getAllEquipmentByGymId(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}/equipment`);
  }

  // amenity

  /**
   * Retrieves all amenities.
   * @returns An HTTP GET request observable.
   */
  getAllAmenities() {
    return this.http.get(`http://localhost:8080/api/amenities`);
  }

  /**
   * Retrieves all amenities of a gym.
   * @param gymId The ID of the gym.
   * @returns An HTTP GET request observable.
   */
  getAllAmenitiesByGymId(gymId: number) {
    return this.http.get(`http://localhost:8080/api/gyms/${gymId}/amenities`);
  }

  // private endpoints

  // owner

  /**
   * Updates an owner by ID.
   * @param ownerId The ID of the owner to update.
   * @param ownerObject The updated owner data.
   * @returns An HTTP PUT request observable.
   */
  updateOwnerById(ownerId: number, ownerObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/owners/${ownerId}`, ownerObject, { headers });
  }

  /**
   * Deletes an owner by ID.
   * @param ownerId The ID of the owner to delete.
   * @returns An HTTP DELETE request observable.
   */
  deleteOwnerById(ownerId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/owners/${ownerId}`, { headers });
  }

  // gym

  /**
   * Creates a new gym.
   * @param gymObject The gym data to create.
   * @returns An HTTP POST request observable.
   */
  createGym(gymObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms`, gymObject, { headers });
  }

  /**
   * Updates a gym by ID.
   * @param gymId The ID of the gym to update.
   * @param gymObject The updated gym data.
   * @returns An HTTP PUT request observable.
   */
  updateGymById(gymId: number, gymObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}`, gymObject, { headers });
  }

  /**
   * Deletes a gym by ID.
   * @param gymId The ID of the gym to delete.
   * @returns An HTTP DELETE request observable.
   */
  deleteGymById(gymId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}`, { headers });
  }

  // equipment

  /**
   * Creates new equipment for a gym.
   * @param gymId The ID of the gym.
   * @param equipmentObject The equipment data to create.
   * @returns An HTTP POST request observable.
   */
  createEquipmentByGymId(gymId: number, equipmentObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/equipment/`, equipmentObject, { headers });
  }

  /**
   * Updates equipment of a gym by ID.
   * @param gymId The ID of the gym.
   * @param equipmentId The ID of the equipment to update.
   * @param equipmentObject The updated equipment data.
   * @returns An HTTP PUT request observable.
   */
  updateEquipmentByGymId(gymId: number, equipmentId: number, equipmentObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, equipmentObject, { headers });
  }

  /**
   * Deletes equipment of a gym by ID.
   * @param gymId The ID of the gym.
   * @param equipmentId The ID of the equipment to delete.
   * @returns An HTTP DELETE request observable.
   */
  deleteEquipmentByGymId(gymId: number, equipmentId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/equipment/${equipmentId}`, { headers });
  }

  // amenity

  /**
   * Creates new amenity for a gym.
   * @param gymId The ID of the gym.
   * @param amenityObject The amenity data to create.
   * @returns An HTTP POST request observable.
   */
  createAmenityByGymId(gymId: number, amenityObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`http://localhost:8080/api/gyms/${gymId}/amenities/`, amenityObject, { headers });
  }

  /**
   * Updates an amenity of a gym by ID.
   * @param gymId The ID of the gym.
   * @param amenityId The ID of the amenity to update.
   * @param amenityObject The updated amenity data.
   * @returns An HTTP PUT request observable.
   */
  updateAmenityByGymId(gymId: number, amenityId: number, amenityObject: any) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, amenityObject, { headers });
  }

  /**
   * Deletes an amenity of a gym by ID.
   * @param gymId The ID of the gym.
   * @param amenityId The ID of the amenity to delete.
   * @returns An HTTP DELETE request observable.
   */
  deleteAmenityByGymId(gymId: number, amenityId: number) {
    let token = localStorage.getItem('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`http://localhost:8080/api/gyms/${gymId}/amenities/${amenityId}`, { headers });
  }
}