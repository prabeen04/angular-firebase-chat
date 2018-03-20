

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="e"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">

<title>Client</title>

<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Custom CSS -->
<link href="css/sb-admin.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">

<!-- Custom Fonts -->
<link href="font-awesome/css/font-awesome.min.css" rel="stylesheet"
	type="text/css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<link href="css/bootstrap-datetimepicker.css" rel="stylesheet"
	media="screen">

</head>

<body>

	<!-- Navigation -->
	<jsp:include page="navbar.jsp" />
	<!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
	<jsp:include page="sidemenu.jsp" />
	<!-- /.navbar-collapse -->

	<div id="page-wrapper" style="min-height: 630px;">
		<jsp:include page="modal.jsp"></jsp:include>
		<div class="container-fluid">
			<div class="panel panel-primary">
				<div class="panel-heading">
					<h3 class="panel-title">Client Details</h3>
				</div>
				<div class="panel-body">

					

						<div class="">
							<form class="form-horizontal" action="" method="post">
								<div class="form-group">
									<div class="col-sm-12">
										<div class="col-sm-4">



											<input type="hidden" class="form-control" readonly name="">

											<div class="form-group">
												<div>
													<img id="uploadPreview1"
														src="getClientImagefromClientid/${client_id }"
														alt="PROFILE IMAGE" class="profile-img" height="120px"
														width="120px">
												</div>
												<!--  <span class="btn btn-default btn-file">Upload Photo<input id="uploadImage1" type="file" name="imageUpload" size="50" onchange="PreviewImage(1);" /></span></center> -->
												<div class="" style="margin-left: 20px;">
													<span class="btn btn-success btn-circles btn-sm btn-file"
														data-toggle="tooltip" data-placement="bottom"
														title="Upload"><i class="fa fa-upload"
														aria-hidden="true"></i><input id="uploadImage1" class=""
														type="file" name="imageUpload" size="50"
														onchange="PreviewImage(1);"></span> <span
														class="btn btn-danger btn-circles btn-sm"><i
														class="fa fa-trash" aria-hidden="true"
														data-toggle="tooltip" data-placement="bottom"
														title="Delete"></i></span>
												</div>
											</div>



											<div class="form-group">
												<label class="col-sm-4 control-label">Url </label>
												<div class="col-sm-8">

													<input type="text" class="form-control" placeholder="Url"
														readonly name="" value="${url}">
												</div>
											</div>
											<div class="form-group">
												<label class="col-sm-4 control-label">Name </label>
												<div class="col-sm-8">
													<input type="text" class="form-control" readonly
														placeholder="Name" name="" value="${name_of_client }">
												</div>
											</div>
											<div id="addressDiv">
												<div class="form-group">
													<label class="col-sm-4 control-label">Industry type
													</label>
													<div class="col-sm-8">
														<input type="text" class="form-control"
															placeholder="Industry" name="" id=""
															value="${ industrytype}">
													</div>
												</div>

												<div class="form-group">
													<label class="col-sm-4 control-label">Employee # </label>
													<div class="col-sm-8">
														<input type="text" class="form-control"
															placeholder="Employee" name="" id=""
															value="${ NoOfEmployee}">
													</div>
												</div>

												</div>

												<div class="col-sm-8">
													<div class="panel panel-primary">
														<div class="panel-body" style="min-height: 400px;">
															<div class="col-sm-12 col-sm-5">
																<div class="panel panel-primary">
																	<div class="panel-body" style="min-height: 100px;">

																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-home"></i> ${city}
																				</p>
																			</div>
																		</div>
																					<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-home"></i> &nbsp;${street}
																				</p>
																			</div>
																		</div>
																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-map-pin"></i> &nbsp;${phoneNo}
																				</p>
																			</div>
																		</div>

																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-mobile"></i> &nbsp;${pincode}
																				</p>
																			</div>
																		</div>
																		
																			
																	</div>
																</div>
															</div>

															<!-- <div class="col-sm-12 col-sm-5">
																<div class="panel panel-primary">
																	<div class="panel-body" style="min-height: 100px;">

																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-home"></i> Rotterdam
																				</p>
																			</div>
																		</div>

																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-map-pin"></i> &nbsp;3037DS
																				</p>
																			</div>
																		</div>

																		<div class="row">
																			<div class="col-sm-6">
																				<p>
																					<i class="fa fa-mobile"></i> &nbsp;9234561
																				</p>
																			</div>
																		</div>
																	</div>
																</div>
															</div> -->

															<!--  <div class="col-sm-4">
                                      <img src="images/Plus symbol.png" height="120px" width="120px" alt="" class="" id=""  data-hover="tooltip" data-placement="bottom" title="Add Location"   data-toggle="modal" data-target="#myModalAdd">
                                      </div> -->
</div>



														</div>
													</div>
												</div>

												<div class="col-lg-12">
													<center>
														<!--   <button type="submit" class="btn btn-primary">Submit</button> -->
														<!--   <button type="button" class="btn btn-success" onclick="window.location='pipeline';" data-dismiss="modal">&nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;</button> -->
														<button type="button" class="btn btn-danger"
															onclick="window.location='crm_customer';"
															data-dismiss="modal">&nbsp;&nbsp;&nbsp;Exit&nbsp;&nbsp;&nbsp;</button>
													</center>
												</div>


											</div>
										</div>
							</form>


						</div>




				</div>


			</div>
		</div>
	</div>




	<!-- /.container-fluid -->


	<!-- /#page-wrapper -->


	<!-- /#wrapper -->

	<!-- Custom JS -->


	<!-- jQuery -->
	<script src="js/jquery.js"></script>

	<!-- Bootstrap Core JavaScript -->
	<script src="js/bootstrap.min.js"></script>
	<script src="js/custom.js"></script>
	<script src="js/opportunity.js"></script>
	<script src="js/opportunity_tableDynamic.js"></script>
	<script src="js/opportunity_sum.js"></script>
	<script src="js/addLocation_Contact.js"></script>

	<script type="text/javascript" src="js/bootstrap-datetimepicker.js"
		charset="UTF-8"></script>
	<script type="text/javascript">
		
	</script>

	


	<script type="text/javascript">
		$("#profileDropdown li").click(function() {

			if (this.id == "logoutlist") {
				var x = window.confirm("Do you wish to Logout?")
				if (x)
					$("#logout").attr("href", "logout");
				else {

				}

			}

		});
	</script>

</body>

</html>
