import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User, UserFilter } from '../models/user';
import { ApiRequestService } from './api-request.service';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    private user_dropdown_url = environment.apiUrl + "/user/get-select-list";
    private add_user_url = environment.apiUrl + "user/add";
    private edit_user_url = environment.apiUrl + "user/edit";
    private get_user_url = environment.apiUrl + "user/get";
    private get_users_url = environment.apiUrl + "user/get-list";
    private delete_user_url = environment.apiUrl + "user/delete";

    constructor(protected apiService: ApiRequestService) {
    }

    public getUsersDropdown(): Observable<any> {
        return this.apiService.get(this.user_dropdown_url);
    }

    public addUserInfo(userInfo: User): Observable<any> {
        return this.apiService.post(this.add_user_url, userInfo);
    }

    public getUserInfo(id: number): Observable<any> {
        return this.apiService.get(this.get_user_url + "/" + id);
    }

    public editUserInfo(userInfo: User): Observable<any> {
        return this.apiService.put(this.edit_user_url, userInfo);
    }

    public getUserList(userFilter: UserFilter): Observable<any> {
        return this.apiService.get(this.get_users_url, userFilter);
    }

    public deleteUser(userId: number): Observable<any> {
        return this.apiService.delete(this.delete_user_url + "/" + userId);
    }
}