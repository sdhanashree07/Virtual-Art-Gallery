package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entities.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	 @Query("SELECT u FROM User u WHERE u.role.id = :roleId")
	 List<User> findUsersByRoleId(@Param("roleId") int roleId);

	 @Modifying
	 @Query("update User u set status = :status where id = :u_id")
	 int changeStatus(int u_id,boolean status);
	
}
